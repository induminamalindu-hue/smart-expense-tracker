/**
 * Exact Android Studio source files for the Smart Expense Tracker app.
 * Used for file selection, display, code editing, and copy utilities.
 */

export interface SourceFile {
  name: string;
  path: string;
  language: "xml" | "kotlin";
  content: string;
}

export const initialAndroidFiles: SourceFile[] = [
  {
    name: "strings.xml (English - Default)",
    path: "app/src/main/res/values/strings.xml",
    language: "xml",
    content: `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">Smart Expense Tracker</string>
    <string name="balance">Current Balance</string>
    <string name="income">Total Income</string>
    <string name="expense">Total Expense</string>
    <string name="budget_spent">Budget Spent</string>
    <string name="set_monthly_budget">Set Monthly Budget Limit</string>
    <string name="budget_placeholder">e.g. 50000</string>
    <string name="save_budget">Save Budget</string>
    <string name="add_transaction">Add Transaction</string>
    
    <!-- Input Form -->
    <string name="amount">Amount</string>
    <string name="description">Description / Notes</string>
    <string name="select_category">Select Category</string>
    <string name="type_income">Income</string>
    <string name="type_expense">Expense</string>
    <string name="add_button">Add Record</string>
    
    <!-- Categories -->
    <string name="cat_food">Food</string>
    <string name="cat_transport">Transport</string>
    <string name="cat_bills">Bills</string>
    <string name="cat_shopping">Shopping</string>
    <string name="cat_entertainment">Entertainment</string>
    <string name="cat_medical">Medical</string>
    <string name="cat_other">Other</string>

    <!-- Notifications & Messages -->
    <string name="budget_warning_title">Budget Limit Exceeded!</string>
    <string name="budget_warning_desc">You have exceeded your monthly budget limit of %1$s. Current expenses: %2$s</string>
    <string name="record_added">Transaction added successfully!</string>
    <string name="invalid_inputs">Please enter a valid amount and description</string>
    <string name="currency_symbol">Rs.</string>
</resources>`
  },
  {
    name: "strings.xml (Sinhala - values-si)",
    path: "app/src/main/res/values-si/strings.xml",
    language: "xml",
    content: `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">ස්මාර්ට් වියදම් ට්‍රැකර්</string>
    <string name="balance">වත්මන් ශේෂය</string>
    <string name="income">මුළු ආදායම</string>
    <string name="expense">මුළු වියදම</string>
    <string name="budget_spent">වියදම් කල බජට් එක</string>
    <string name="set_monthly_budget">මාසික බජට් සීමාව ඇතුලත් කරන්න</string>
    <string name="budget_placeholder">උදා: 50000</string>
    <string name="save_budget">බජට් එක සුරකින්න</string>
    <string name="add_transaction">ගනුදෙනුවක් එක් කරන්න</string>
    
    <!-- Input Form -->
    <string name="amount">මුදල</string>
    <string name="description">විස්තරය / සටහන්</string>
    <string name="select_category">ප්‍රවර්ගය තෝරන්න</string>
    <string name="type_income">ආදායම්</string>
    <string name="type_expense">වියදම්</string>
    <string name="add_button">වාර්තාව එක් කරන්න</string>
    
    <!-- Categories -->
    <string name="cat_food">ආහාර</string>
    <string name="cat_transport">ප්‍රවාහනය</string>
    <string name="cat_bills">බිල්පත්</string>
    <string name="cat_shopping">සාප්පු සවාරි</string>
    <string name="cat_entertainment">විනෝදාස්වාදය</string>
    <string name="cat_medical">වෛද්‍ය</string>
    <string name="cat_other">වෙනත්</string>

    <!-- Notifications & Messages -->
    <string name="budget_warning_title">බජට් සීමාව ඉක්මවා ඇත!</string>
    <string name="budget_warning_desc">ඔබේ මාසික බජට් සීමාව වන %1$s ඉක්මවා ගොස් ඇත. වත්මන් වියදම්: %2$s</string>
    <string name="record_added">ගනුදෙනුව සාර්ථකව එක් කරන ලදී!</string>
    <string name="invalid_inputs">කරුණාකර නිවැරදි මුදලක් සහ විස්තරයක් ඇතුලත් කරන්න</string>
    <string name="currency_symbol">රු.</string>
</resources>`
  },
  {
    name: "strings.xml (Tamil - values-ta)",
    path: "app/src/main/res/values-ta/strings.xml",
    language: "xml",
    content: `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">ஸ்மார்ட் செலவு டிராக்கர்</string>
    <string name="balance">தற்போதைய இருப்பு</string>
    <string name="income">மொத்த வருமானம்</string>
    <string name="expense">மொத்த செலவு</string>
    <string name="budget_spent">செலவிடப்பட்ட பட்ஜெட்</string>
    <string name="set_monthly_budget">மாதாந்திர பட்ஜெட் வரம்பை அமைக்கவும்</string>
    <string name="budget_placeholder">உதாரணம்: 50000</string>
    <string name="save_budget">பட்ஜெட்டை சேமிக்கவும்</string>
    <string name="add_transaction">பரிவர்த்தனையைச் சேர்க்கவும்</string>
    
    <!-- Input Form -->
    <string name="amount">தொகை</string>
    <string name="description">விளக்கம் / குறிப்புகள்</string>
    <string name="select_category">வகையைத் தேர்ந்தெடுக்கவும்</string>
    <string name="type_income">வருமானம்</string>
    <string name="type_expense">செலவு</string>
    <string name="add_button">பதிவைச் சேர்</string>
    
    <!-- Categories -->
    <string name="cat_food">உணவு</string>
    <string name="cat_transport">போக்குவரத்து</string>
    <string name="cat_bills">கட்டணங்கள்</string>
    <string name="cat_shopping">கொள்முதல்</string>
    <string name="cat_entertainment">பொழுதுபோக்கு</string>
    <string name="cat_medical">மருத்துவம்</string>
    <string name="cat_other">மற்றவை</string>

    <!-- Notifications & Messages -->
    <string name="budget_warning_title">பட்ஜெட் முழுமையாக முடிந்தது!</string>
    <string name="budget_warning_desc">உங்கள் மாதாந்திர பட்ஜெட் வரம்பான %1$s ஐ தாண்டிவிட்டீர்கள். தற்போதைய செலவு: %2$s</string>
    <string name="record_added">பரிவர்த்தனை வெற்றிகரமாக சேர்க்கப்பட்டது!</string>
    <string name="invalid_inputs">முறையான தொகை மற்றும் விளக்கத்தை உள்ளிடவும்</string>
    <string name="currency_symbol">ரூ.</string>
</resources>`
  },
  {
    name: "activity_main.xml (UI Layout)",
    path: "app/src/main/res/layout/activity_main.xml",
    language: "xml",
    content: `<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"
    android:background="#F8FAFC">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="16dp">

        <!-- Header & Language Switches -->
        <RelativeLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:margin_bottom="16dp">

            <TextView
                android:id="@+id/tvAppTitle"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="@string/app_name"
                android:textSize="22sp"
                android:textStyle="bold"
                android:textColor="#0F172A" />

            <!-- Dynamic Trilingual Switces Layout -->
            <LinearLayout
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_alignParentRight="true"
                android:layout_centerVertical="true"
                android:orientation="horizontal">

                <Button
                    android:id="@+id/btnLangEN"
                    android:layout_width="wrap_content"
                    android:layout_height="36dp"
                    android:text="EN"
                    android:textSize="11sp"
                    android:backgroundTint="#64748B"
                    android:layout_marginRight="4dp"
                    android:padding="0dp" />

                <Button
                    android:id="@+id/btnLangSI"
                    android:layout_width="wrap_content"
                    android:layout_height="36dp"
                    android:text="සිං"
                    android:textSize="11sp"
                    android:backgroundTint="#64748B"
                    android:layout_marginRight="4dp"
                    android:padding="0dp" />

                <Button
                    android:id="@+id/btnLangTA"
                    android:layout_width="wrap_content"
                    android:layout_height="36dp"
                    android:text="தமிழ்"
                    android:textSize="11sp"
                    android:backgroundTint="#64748B"
                    android:padding="0dp" />
            </LinearLayout>
        </RelativeLayout>

        <!-- Current Status Dashboard Card -->
        <androidx.cardview.widget.CardView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            app:cardCornerRadius="16dp"
            app:cardElevation="4dp"
            android:layout_marginBottom="16dp"
            app:cardBackgroundColor="#FFFFFF">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="vertical"
                android:padding="16dp">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="@string/balance"
                    android:textColor="#64748B"
                    android:textSize="14sp" />

                <TextView
                    android:id="@+id/tvCurrentBalance"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Rs. 0.00"
                    android:textSize="28sp"
                    android:textStyle="bold"
                    android:textColor="#0F172A"
                    android:layout_marginBottom="16dp" />

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="horizontal"
                    android:weightSum="2"
                    android:layout_marginBottom="16dp">

                    <LinearLayout
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        android:layout_weight="1"
                        android:orientation="vertical">

                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="@string/income"
                            android:textColor="#10B981"
                            android:textSize="12sp"
                            android:textStyle="bold" />

                        <TextView
                            android:id="@+id/tvTotalIncome"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="Rs. 0.00"
                            android:textSize="16sp"
                            android:textColor="#0F172A" />
                    </LinearLayout>

                    <LinearLayout
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        android:layout_weight="1"
                        android:orientation="vertical">

                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="@string/expense"
                            android:textColor="#EF4444"
                            android:textSize="12sp"
                            android:textStyle="bold" />

                        <TextView
                            android:id="@+id/tvTotalExpenses"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="Rs. 0.00"
                            android:textSize="16sp"
                            android:textColor="#0F172A" />
                    </LinearLayout>
                </LinearLayout>

                <View
                    android:layout_width="match_parent"
                    android:layout_height="1dp"
                    android:background="#E2E8F0"
                    android:layout_marginBottom="12dp" />

                <!-- Budget visualization progress bar -->
                <RelativeLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="@string/budget_spent"
                        android:textColor="#64748B"
                        android:textSize="12sp" />

                    <TextView
                        android:id="@+id/tvBudgetPercentage"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:layout_alignParentRight="true"
                        android:text="0%"
                        android:textStyle="bold"
                        android:textColor="#0F172A"
                        android:textSize="12sp" />
                </RelativeLayout>

                <ProgressBar
                    android:id="@+id/pbBudgetLimit"
                    style="@android:style/Widget.ProgressBar.Horizontal"
                    android:layout_width="match_parent"
                    android:layout_height="8dp"
                    android:progress="0"
                    android:max="100"
                    android:progressDrawable="@drawable/custom_progress_bg"
                    android:layout_marginTop="6dp" />
            </LinearLayout>
        </androidx.cardview.widget.CardView>

        <!-- Budget Configuration and input limits -->
        <androidx.cardview.widget.CardView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            app:cardCornerRadius="12dp"
            android:layout_marginBottom="16dp"
            app:cardBackgroundColor="#FFFFFF">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="vertical"
                android:padding="16dp">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="@string/set_monthly_budget"
                    android:textStyle="bold"
                    android:textColor="#1E293B"
                    android:textSize="14sp"
                    android:layout_marginBottom="8dp" />

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="horizontal">

                    <EditText
                        android:id="@+id/etBudgetLimit"
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        android:layout_weight="1"
                        android:hint="@string/budget_placeholder"
                        android:inputType="numberDecimal"
                        android:textSize="14sp" />

                    <Button
                        android:id="@+id/btnSaveBudget"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="@string/save_budget"
                        android:backgroundTint="#3B82F6"
                        android:layout_marginLeft="8dp" />
                </LinearLayout>
            </LinearLayout>
        </androidx.cardview.widget.CardView>

        <!-- Form for Adding New Record -->
        <androidx.cardview.widget.CardView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            app:cardCornerRadius="12dp"
            android:layout_marginBottom="16dp"
            app:cardBackgroundColor="#FFFFFF">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="vertical"
                android:padding="16dp">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="@string/add_transaction"
                    android:textStyle="bold"
                    android:textColor="#1E293B"
                    android:textSize="14sp"
                    android:layout_marginBottom="12dp" />

                <RadioGroup
                    android:id="@+id/rgType"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="horizontal"
                    android:layout_marginBottom="12dp"
                    android:checkedButton="@+id/rbExpense">

                    <RadioButton
                        android:id="@+id/rbIncome"
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        android:layout_weight="1"
                        android:text="@string/type_income"
                        android:textColor="#10B981" />

                    <RadioButton
                        android:id="@+id/rbExpense"
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        android:layout_weight="1"
                        android:text="@string/type_expense"
                        android:textColor="#EF4444" />
                </RadioGroup>

                <EditText
                    android:id="@+id/etAmount"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:hint="@string/amount"
                    android:inputType="numberDecimal"
                    android:layout_marginBottom="12dp"
                    android:textSize="14sp" />

                <EditText
                    android:id="@+id/etDescription"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:hint="@string/description"
                    android:inputType="text"
                    android:layout_marginBottom="12dp"
                    android:textSize="14sp" />

                <Spinner
                    android:id="@+id/spCategory"
                    android:layout_width="match_parent"
                    android:layout_height="48dp"
                    android:layout_marginBottom="16dp" />

                <Button
                    android:id="@+id/btnAddRecord"
                    android:layout_width="match_parent"
                    android:layout_height="48dp"
                    android:text="@string/add_button"
                    android:backgroundTint="#1F2937"
                    android:textColor="#FFFFFF" />
            </LinearLayout>
        </androidx.cardview.widget.CardView>

        <!-- Dynamic List Header / Transaction History -->
        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="Transaction History (SQLite)"
            android:textSize="15sp"
            android:textStyle="bold"
            android:textColor="#334155"
            android:layout_marginBottom="8dp" />

        <LinearLayout
            android:id="@+id/layoutHistoryList"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical" />

    </LinearLayout>
</ScrollView>`
  },
  {
    name: "DatabaseHelper.kt",
    path: "app/src/main/java/com/tracker/DatabaseHelper.kt",
    language: "kotlin",
    content: `package com.tracker

import android.content.ContentValues
import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import android.database.Cursor

/**
 * SQLite open helper to manage transactions inside the Smart Expense Tracker.
 * Manages standard CRUD operations natively.
 */
class DatabaseHelper(context: Context) : SQLiteOpenHelper(context, DATABASE_NAME, null, DATABASE_VERSION) {

    companion object {
        private const val DATABASE_NAME = "SmartExpenseTracker.db"
        private const val DATABASE_VERSION = 1

        const val TABLE_TRANSACTIONS = "transactions"
        const val COLUMN_ID = "id"
        const val COLUMN_AMOUNT = "amount"
        const val COLUMN_CATEGORY = "category"
        const val COLUMN_TYPE = "type" // "Income" or "Expense"
        const val COLUMN_DATE = "date"
    }

    override fun onCreate(db: SQLiteDatabase) {
        val createTableQuery = ("CREATE TABLE " + TABLE_TRANSACTIONS + " ("
                + COLUMN_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, "
                + COLUMN_AMOUNT + " REAL, "
                + COLUMN_CATEGORY + " TEXT, "
                + COLUMN_TYPE + " TEXT, "
                + COLUMN_DATE + " TEXT)")
        db.execSQL(createTableQuery)
    }

    override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) {
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_TRANSACTIONS)
        onCreate(db)
    }

    /**
     * Add a record into our SQLite database.
     */
    fun insertTransaction(amount: Double, category: String, type: String, date: String): Long {
        val db = this.writableDatabase
        val values = ContentValues().apply {
            put(COLUMN_AMOUNT, amount)
            put(COLUMN_CATEGORY, category)
            put(COLUMN_TYPE, type)
            put(COLUMN_DATE, date)
        }
        val result = db.insert(TABLE_TRANSACTIONS, null, values)
        db.close()
        return result
    }

    /**
     * Get all transactions ordered by ID descending.
     */
    fun getAllTransactions(): Cursor {
        val db = this.readableDatabase
        return db.rawQuery("SELECT * FROM $TABLE_TRANSACTIONS ORDER BY $COLUMN_ID DESC", null)
    }

    /**
     * Calculate total sums based on the type (Income vs Expense).
     */
    fun getSumOfTransactions(type: String): Double {
        val db = this.readableDatabase
        var total = 0.0
        val query = "SELECT SUM($COLUMN_AMOUNT) FROM $TABLE_TRANSACTIONS WHERE $COLUMN_TYPE = ?"
        val cursor = db.rawQuery(query, arrayOf(type))
        if (cursor.moveToFirst()) {
            total = cursor.getDouble(0)
        }
        cursor.close()
        return total
    }

    /**
     * Delete a single entry by ID.
     */
    fun deleteTransaction(id: Long): Int {
        val db = this.writableDatabase
        val deleted = db.delete(TABLE_TRANSACTIONS, "$COLUMN_ID = ?", arrayOf(id.toString()))
        db.close()
        return deleted
    }

    /**
     * Clear all records in SQLite database.
     */
    fun clearAllTransactions() {
        val db = this.writableDatabase
        db.execSQL("DELETE FROM $TABLE_TRANSACTIONS")
        db.close()
    }
}`
  },
  {
    name: "MainActivity.kt",
    path: "app/src/main/java/com/tracker/MainActivity.kt",
    language: "kotlin",
    content: `package com.tracker

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.content.res.Configuration
import android.database.Cursor
import android.os.Build
import android.os.Bundle
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import java.text.SimpleDateFormat
import java.util.*

/**
 * Smart Expense Tracker Main Activity.
 * Implements: Multilingual Locale Support, Local Database SQL computations,
 * Progress bars/Dashboard limits, dynamically emitted warnings via Notifications.
 */
class MainActivity : AppCompatActivity() {

    private lateinit var dbHelper: DatabaseHelper
    private lateinit var sharedPreferences: SharedPreferences

    // UI elements
    private lateinit var tvAppTitle: TextView
    private lateinit var tvCurrentBalance: TextView
    private lateinit var tvTotalIncome: TextView
    private lateinit var tvTotalExpenses: TextView
    private lateinit var tvBudgetPercentage: TextView
    private lateinit var pbBudgetLimit: ProgressBar
    private lateinit var etBudgetLimit: EditText
    private lateinit var etAmount: EditText
    private lateinit var etDescription: EditText
    private lateinit var spCategory: Spinner
    private lateinit var rgType: RadioButton
    private lateinit var btnAddRecord: Button
    private lateinit var layoutHistoryList: LinearLayout

    private var currentLanguage = "en"
    private var monthlyBudgetLimit = 100000.0 // Default limit

    override fun onCreate(savedInstanceState: Bundle?) {
        // Load selected language from preferences *before* inflating content
        sharedPreferences = getSharedPreferences("AppSettings", Context.MODE_PRIVATE)
        currentLanguage = sharedPreferences.getString("Language", "en") ?: "en"
        setAppLocale(currentLanguage)

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        dbHelper = DatabaseHelper(this)
        createNotificationChannel()

        // Bind and setup views
        tvAppTitle = findViewById(R.id.tvAppTitle)
        tvCurrentBalance = findViewById(R.id.tvCurrentBalance)
        tvTotalIncome = findViewById(R.id.tvTotalIncome)
        tvTotalExpenses = findViewById(R.id.tvTotalExpenses)
        tvBudgetPercentage = findViewById(R.id.tvBudgetPercentage)
        pbBudgetLimit = findViewById(R.id.pbBudgetLimit)
        etBudgetLimit = findViewById(R.id.etBudgetLimit)
        etAmount = findViewById(R.id.etAmount)
        etDescription = findViewById(R.id.etDescription)
        spCategory = findViewById(R.id.spCategory)
        btnAddRecord = findViewById(R.id.btnAddRecord)
        layoutHistoryList = findViewById(R.id.layoutHistoryList)

        // Bind language toggle buttons
        findViewById<Button>(R.id.btnLangEN).setOnClickListener { changeLanguage("en") }
        findViewById<Button>(R.id.btnLangSI).setOnClickListener { changeLanguage("si") }
        findViewById<Button>(R.id.btnLangTA).setOnClickListener { changeLanguage("ta") }

        // Setup Category List dynamic loading
        setupCategorySpinner()

        // Load current budget from preferences
        monthlyBudgetLimit = sharedPreferences.getFloat("BudgetLimit", 100000.0f).toDouble()
        etBudgetLimit.setText(monthlyBudgetLimit.toString())

        // Save new budget limit
        findViewById<Button>(R.id.btnSaveBudget).setOnClickListener {
            val budgetInput = etBudgetLimit.text.toString().trim()
            if (budgetInput.isNotEmpty()) {
                monthlyBudgetLimit = budgetInput.toDouble()
                sharedPreferences.edit().putFloat("BudgetLimit", monthlyBudgetLimit.toFloat()).apply()
                Toast.makeText(this, "Budget Updated", Toast.LENGTH_SHORT).show()
                updateDashboard()
            }
        }

        // Add Transaction Button Event
        btnAddRecord.setOnClickListener {
            addNewTransaction()
        }

        // Generate Dashboard Values on Start
        updateDashboard()
    }

    /**
     * Setup custom category item texts matching string configurations.
     */
    private fun setupCategorySpinner() {
        val categories = arrayOf(
            getString(R.string.cat_food),
            getString(R.string.cat_transport),
            getString(R.string.cat_bills),
            getString(R.string.cat_shopping),
            getString(R.string.cat_entertainment),
            getString(R.string.cat_medical),
            getString(R.string.cat_other)
        )
        val adapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, categories)
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        spCategory.adapter = adapter
    }

    /**
     * Add record locally to SQLite database.
     */
    private fun addNewTransaction() {
        val inputAmt = etAmount.text.toString().trim()
        val inputNotes = etDescription.text.toString().trim()
        val isIncome = findViewById<RadioButton>(R.id.rbIncome).isChecked

        if (inputAmt.isEmpty() || inputNotes.isEmpty()) {
            Toast.makeText(this, getString(R.string.invalid_inputs), Toast.LENGTH_LONG).show()
            return
        }

        val amount = inputAmt.toDouble()
        val type = if (isIncome) "Income" else "Expense"
        val category = spCategory.selectedItem.toString()
        
        // Formatted timestamp
        val sdf = SimpleDateFormat("yyyy-MM-dd HH:mm", Locale.getDefault())
        val dateString = sdf.format(Date())

        val rowId = dbHelper.insertTransaction(amount, "$category - $inputNotes", type, dateString)
        if (rowId != -1L) {
            Toast.makeText(this, getString(R.string.record_added), Toast.LENGTH_SHORT).show()
            etAmount.text.clear()
            etDescription.text.clear()
            
            // Check budget constraints and update
            updateDashboard()
        }
    }

    /**
     * Sync local calculation queries and trigger local warns if threshold limit is breached.
     */
    private fun updateDashboard() {
        val totalIncome = dbHelper.getSumOfTransactions("Income")
        val totalExpenses = dbHelper.getSumOfTransactions("Expense")
        val balance = totalIncome - totalExpenses

        val symbol = getString(R.string.currency_symbol)

        // Set visual elements
        tvCurrentBalance.text = "$symbol \${String.format("%.2f", balance)}"
        tvTotalIncome.text = "$symbol \${String.format("%.2f", totalIncome)}"
        tvTotalExpenses.text = "$symbol \${String.format("%.2f", totalExpenses)}"

        // Percentage tracking
        var percentage = 0
        if (monthlyBudgetLimit > 0) {
            percentage = ((totalExpenses / monthlyBudgetLimit) * 100).toInt()
        }
        tvBudgetPercentage.text = "$percentage%"
        pbBudgetLimit.progress = Math.min(percentage, 100)

        // Notify customer when budget limit has been exceeded
        if (totalExpenses > monthlyBudgetLimit) {
            sendNotification(totalExpenses)
        }

        // Re-draw dynamic transaction list entries inside UI
        loadTransactionList()
    }

    /**
     * Renders records into custom row views programmatically.
     */
    private fun loadTransactionList() {
        layoutHistoryList.removeAllViews()
        val cursor: Cursor = dbHelper.getAllTransactions()
        
        val symbol = getString(R.string.currency_symbol)

        if (cursor.moveToFirst()) {
            do {
                val id = cursor.getLong(cursor.getColumnIndexOrThrow(DatabaseHelper.COLUMN_ID))
                val amt = cursor.getDouble(cursor.getColumnIndexOrThrow(DatabaseHelper.COLUMN_AMOUNT))
                val cat = cursor.getString(cursor.getColumnIndexOrThrow(DatabaseHelper.COLUMN_CATEGORY))
                val type = cursor.getString(cursor.getColumnIndexOrThrow(DatabaseHelper.COLUMN_TYPE))
                val date = cursor.getString(cursor.getColumnIndexOrThrow(DatabaseHelper.COLUMN_DATE))

                val rowLayout = LinearLayout(this).apply {
                    orientation = LinearLayout.HORIZONTAL
                    setPadding(12, 12, 12, 12)
                    setBackgroundColor(if (type == "Income") 0xFFE6F4EA.toInt() else 0xFFFCE8E6.toInt())
                    val lp = LinearLayout.LayoutParams(
                        LinearLayout.LayoutParams.MATCH_PARENT, 
                        LinearLayout.LayoutParams.WRAP_CONTENT
                    )
                    lp.setMargins(0, 4, 0, 8)
                    layoutParams = lp
                }

                // Info columns
                val textLayout = LinearLayout(this).apply {
                    orientation = LinearLayout.VERTICAL
                    layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f)
                }

                val titleView = TextView(this).apply {
                    text = cat
                    textSize = 14sp
                    textStyle = android.graphics.Typeface.BOLD
                    textColor = 0xFF1E293B.toInt()
                }

                val dateView = TextView(this).apply {
                    text = "$date | $type"
                    textSize = 11sp
                    textColor = 0xFF64748B.toInt()
                }

                textLayout.addView(titleView)
                textLayout.addView(dateView)

                // Price display
                val priceView = TextView(this).apply {
                    text = "\${if (type == "Income") "+" else "-"}$symbol \${String.format("%.2f", amt)}"
                    textSize = 14sp
                    textStyle = android.graphics.Typeface.BOLD
                    textColor = if (type == "Income") 0xFF10B981.toInt() else 0xFFEF4444.toInt()
                    gravity = android.view.Gravity.CENTER_VERTICAL or android.view.Gravity.RIGHT
                    layoutParams = LinearLayout.LayoutParams(
                        LinearLayout.LayoutParams.WRAP_CONTENT,
                        LinearLayout.LayoutParams.MATCH_PARENT
                    )
                }

                // Delete Button item
                val deleteImage = ImageButton(this).apply {
                    setImageResource(android.R.drawable.ic_menu_delete)
                    setBackgroundColor(android.graphics.Color.TRANSPARENT)
                    setOnClickListener {
                        dbHelper.deleteTransaction(id)
                        updateDashboard()
                    }
                }

                rowLayout.addView(textLayout)
                rowLayout.addView(priceView)
                rowLayout.addView(deleteImage)

                layoutHistoryList.addView(rowLayout)
            } while (cursor.moveToNext())
        }
        cursor.close()
    }

    /**
     * Send warning triggers using Native Notification builders.
     */
    private fun sendNotification(spent: Double) {
        val channelId = "BUDGET_CHANNEL"
        val formattedLimit = String.format("%.2f", monthlyBudgetLimit)
        val formattedSpent = String.format("%.2f", spent)
        val warningDesc = getString(R.string.budget_warning_desc, formattedLimit, formattedSpent)

        val builder = NotificationCompat.Builder(this, channelId)
            .setSmallIcon(android.R.drawable.ic_dialog_alert)
            .setContentTitle(getString(R.string.budget_warning_title))
            .setContentText(warningDesc)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)

        val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.notify(101, builder.build())
    }

    /**
     * Setup system notification channel for compatibility with API 26 (Oreo) and above.
     */
    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = "Budget Notifications"
            val descriptionText = "Triggers local notifications when budget limits are exceeded"
            val importance = NotificationManager.IMPORTANCE_HIGH
            val channel = NotificationChannel("BUDGET_CHANNEL", name, importance).apply {
                description = descriptionText
            }
            val notificationManager: NotificationManager =
                getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

    /**
     * Force application language switch with instant active activity recreation.
     */
    private fun changeLanguage(lang: String) {
        if (currentLanguage != lang) {
            sharedPreferences.edit().putString("Language", lang).apply()
            currentLanguage = lang
            
            // Reapply language configuration locale
            setAppLocale(lang)
            
            // Recreate activity to apply localized texts instantaneously
            recreate()
        }
    }

    /**
     * Configures the system locale settings on activity boot.
     */
    private fun setAppLocale(localeCode: String) {
        val locale = Locale(localeCode)
        Locale.setDefault(locale)
        val config = Configuration()
        config.setLocale(locale)
        resources.updateConfiguration(config, resources.displayMetrics)
    }
}`
  }
];
