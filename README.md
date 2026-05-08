# Payoo — Mobile Financial Service (MFS) Web App

![Payoo Banner](./assets/Group.png)

A mobile-first, browser-based **Mobile Financial Services** application inspired by Bangladeshi platforms like bKash and Nagad. Built with vanilla HTML, CSS (Tailwind + DaisyUI), and JavaScript — no backend required.

---

## 🌟 Live Demo

Open `index.html` in any modern browser. No installation, no server, no dependencies to install.

**Demo Accounts:**

| Name | Account | PIN |
|------|---------|-----|
| Mehedi Hasan | 01711123456 | 1234 |
| Raisa Akter | 01922987654 | 5678 |

> Balances and transaction history persist in your browser's `localStorage`.

---

## 📸 Features

### 🔐 Authentication
- Account number + PIN login
- PIN visibility toggle
- Session-based auth via `sessionStorage`
- Secure logout that clears the session

### 💳 Dashboard
- Live balance display in BDT (৳)
- Balance persists across sessions via `localStorage`
- User greeting with initials avatar

### 💰 Add Money
- Supports multiple payment gateways: **bKash, Nagad, DBBL, Rocket, Bank Transfer**
- Validates PIN before crediting balance
- Logs every transaction with timestamp

### 🏧 Cash Out
- 1.85% service charge (standard agent rate)
- Real-time charge preview as you type
- Validates sufficient balance before processing

### 📤 Send Money
- Transfer to any registered Payoo account
- Live recipient name lookup on blur
- Optional reference/note field
- Both sender and recipient balances update in real time

### 🎁 Daily Bonus
- Claim a random daily bonus between **৳5 – ৳50**
- One claim per day enforced via `localStorage`
- Visual feedback and celebration UI

### 🧾 Pay Bill
- **6 categories:** Electricity, Gas, Water (WASA), Internet, Mobile Recharge, Cable TV
- Dynamic provider dropdown per category (e.g., DESCO, Titas Gas, Grameenphone)
- Deducts from balance and logs the transaction

### 📋 Transaction History
- Chronological log of all transactions (up to 100 entries)
- Credit/debit indicators with colour coding
- Shows running balance after each transaction
- Timestamp for every entry

---

## 🛠️ Tech Stack

| Technology | Role |
|-----------|------|
| HTML5 | Structure |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [DaisyUI v5](https://daisyui.com) | UI component library |
| [Google Fonts – Syne + DM Sans](https://fonts.google.com) | Typography |
| Vanilla JavaScript (ES6+) | Logic & interactivity |
| `localStorage` | Data persistence |
| `sessionStorage` | Auth session management |

> No build step required. CSS and JS are loaded via CDN.

---

## 📁 Project Structure

```
payoo/
├── index.html          # Login page
├── main.html           # Main dashboard (all features)
├── assets/
│   ├── Group.png       # Payoo logo
│   ├── bg.png          # Background decoration
│   ├── money1.png      # Add Money icon
│   ├── purse1.png      # Cash Out icon
│   ├── send1.png       # Send Money icon
│   ├── bonus1.png      # Bonus icon
│   ├── wallet1.png     # Pay Bill icon
│   └── transaction1.png # Transaction History icon
└── README.md
```

---

## 🚀 Getting Started

### Option 1 — Open directly
```bash
# Clone or download the project, then:
open index.html
# or double-click index.html in your file explorer
```

### Option 2 — Serve locally (recommended for consistent asset loading)
```bash
# Using Python
python3 -m http.server 3000

# Using Node.js (npx)
npx serve .

# Then open: http://localhost:3000
```

---

## 🧠 Architecture Notes

### State Management
All application state lives in the browser:

```
localStorage
├── payoo_balance_{account}       # User's current balance
├── payoo_transactions_{account}  # JSON array of transactions
└── payoo_bonus_{account}         # Last bonus claim date

sessionStorage
└── payoo_user                    # Currently logged-in account number
```

### Mock User Database
Users are defined in a JavaScript object in each page. In a production app, this would be replaced with a real API:

```js
const USERS = {
  '01711123456': { name: 'Mehedi Hasan', avatar: 'MH', pin: '1234' },
  '01922987654': { name: 'Raisa Akter',  avatar: 'RA', pin: '5678' },
};
```

### Transaction Flow
Every financial operation follows this pattern:
1. Validate all inputs
2. Verify PIN
3. Check balance sufficiency (for debits)
4. Update `localStorage` balance
5. Append transaction record with timestamp
6. Show toast notification
7. Clear form fields

---

## 🔮 Potential Future Enhancements

- [ ] Node.js / Express backend with a real database (SQLite or MongoDB)
- [ ] JWT-based authentication
- [ ] QR code payment generation
- [ ] Transaction receipts (PDF export)
- [ ] Mobile number OTP verification
- [ ] Dark mode toggle
- [ ] Multi-language support (English / Bengali)
- [ ] Push notifications for incoming transfers
- [ ] Monthly spending analytics chart

---

## 📄 License

This project is built for portfolio and educational purposes. Feel free to use it as a reference or starting point for your own projects.

---

<div align="center">
  <p>Built with ❤️ in Bangladesh 🇧🇩</p>
</div>
