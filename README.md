# 💸 Personal Finance Tracker

A modern and user-friendly finance tracking app built with **React**, **TypeScript**, and **Vite**. This app helps you manage your daily expenses, incomes, categories, and get insights on your financial health.
## 🖼️ Screenshots
![Image](https://github.com/user-attachments/assets/ebed8f65-b1a9-49f2-808d-920c622c6d1c)
## 🚀 Features

- 🔐 User authentication with Clerk
- 📊 Add, edit, delete financial records
- 📅 Date-wise tracking of expenses
- 💳 Categorized tracking (Groceries, Utilities, etc.)
- 🔁 Real-time updates with Context API
- 🧮 Calculates total income and expenses
- 🌈 Clean and responsive UI

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **State Management**: React Context API
- **Styling**: CSS/SCSS or Bootstrap (customizable)
- **Backend**: Node.js + Express + MongoDB (optional)
- **Auth**: Clerk.dev
- **API Communication**: REST with `fetch`


## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/priyanka0123456/personal-finance-tracker-react-app.git
cd finance-tracker

# Install dependencies
npm install

# Add your Clerk public key and backend URLs in `.env`
VITE_CLERK_PUBLISHABLE_KEY=your_key_here

# Run the dev server
npm run dev

