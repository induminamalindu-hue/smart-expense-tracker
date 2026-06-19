import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Gemini SDK lazily to prevent crashing if key is missing on startup
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// REST route for invoice/expense extraction
app.post("/api/extract-invoice", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || typeof text !== "string") {
      res.status(400).json({ error: "Missing or invalid 'text' property in request body" });
      return;
    }

    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Analyze the following spoken or written text input (which can be in English, Sinhala, or Singlish) and accurately extract billing/invoice details into a valid JSON object.

Text input to analyze: "${text}"`,
      config: {
        systemInstruction: `You are an expert Invoice Data Extractor. Your task is to analyze a spoken text input (which can be in English, Sinhala, or Singlish) and accurately extract billing/invoice details.

You must convert the unstructured text into a valid JSON object.

### JSON Output Structure Required:
{
  "customer_name": "Name of the customer (Default to 'Cash Customer' if not mentioned)",
  "items": [
    {
      "item_name": "Name of the product or service",
      "quantity": 1, (Integer - Default to 1 if not mentioned)
      "unit_price": 0.00 (Decimal - Price per item)
    }
  ],
  "payment_status": "Paid / Pending / Partially Paid",
  "notes": "Any extra details mentioned like delivery instructions or discounts"
}

### Guidelines:
1. Language Support: Handle inputs in English, proper Sinhala (e.g., "අමල්ට රුපියල් පන්සීය ගානේ අයිටම් 5ක් වික්කා"), or Singlish (e.g., "Amalata item 5k wikka 5000 gane").
2. Data Accuracy: Extract only the data present. Do not hallucinate or make up items or prices. Keep item names translated to readable English where applicable, or keep their original pronunciation in English/Singlish characters if they represent generic local terms.
3. Return ONLY the raw JSON object. Do not include markdown formatting like \`\`\`json ... \`\`\`, and do not write any conversational text or explanations.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            customer_name: {
              type: Type.STRING,
              description: "Name of the customer (Default to 'Cash Customer' if not mentioned)"
            },
            items: {
              type: Type.ARRAY,
              description: "List of products or services sold or purchased",
              items: {
                type: Type.OBJECT,
                properties: {
                  item_name: {
                    type: Type.STRING,
                    description: "Name of the product or service in English"
                  },
                  quantity: {
                    type: Type.INTEGER,
                    description: "Quantity bought / sold (Default to 1 if not specified)"
                  },
                  unit_price: {
                    type: Type.NUMBER,
                    description: "Unit price of the item"
                  }
                },
                required: ["item_name", "quantity", "unit_price"]
              }
            },
            payment_status: {
              type: Type.STRING,
              description: "Must be 'Paid', 'Pending', or 'Partially Paid'"
            },
            notes: {
              type: Type.STRING,
              description: "Any extra details or original transcript comments"
            }
          },
          required: ["customer_name", "items", "payment_status", "notes"]
        }
      }
    });

    const parsedJson = JSON.parse(response.text || "{}");
    res.json(parsedJson);
  } catch (error: any) {
    console.error("Extraction error:", error);
    res.status(500).json({ error: error.message || "Failed to extract invoice details" });
  }
});

// Setup Vite Dev server or production static serving
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
}

setupVite().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting on port ${PORT}`);
  });
});
