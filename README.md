# 🚀 ScamSentinel - AI-Powered Crypto Scam Detector

ScamSentinel is an AI-powered SaaS platform designed to help users detect fraudulent activities in the cryptocurrency space. By analyzing smart contracts, wallet transactions, and blockchain data, it assigns a scam risk score, helping users stay safe from potential scams.

---

## 📌 Features

- **Smart Contract Analysis**: Detects malicious code patterns in smart contracts.
- **Wallet Behavior Monitoring**: Flags suspicious transactions and addresses.
- **API-Driven**: Provides RESTful APIs for integration.
- **AI & ML-Powered (Planned)**: Leverages AI for scam detection.
- **User-Friendly Dashboard**: React-based frontend for real-time insights.

---

## 🏗️ Tech Stack

### **Backend:**

- **Python** (Django, Django REST Framework)
- **Web3.py** (Ethereum & EVM interaction)
- **PostgreSQL** (Database)
- **Celery & Redis** (Task scheduling for async operations)

### **Frontend:**

- **React.js**
- **Tailwind CSS**
- **Axios** (API requests)
- **React Router** (Navigation)

### **Development Tools:**

- **VS Code**
- **Docker (Planned for deployment)**
- **Git & GitHub**
- **Linux (Ubuntu)**

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/shuku-omhlophe/ScamSentinel.git
cd ScamSentinel
```

### 2️⃣ Backend Setup (Django API)

```sh
cd backend
python3 -m ScamSentinel
source ScamSentinel/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 3️⃣ Frontend Setup (React App)

```sh
cd frontend
npm install
npm start
```

---

## ⚡ API Endpoints

| Endpoint                                 | Method | Description                                  |
| ---------------------------------------- | ------ | -------------------------------------------- |
| `/api/check/<address>/`                  | GET    | Analyzes a crypto address for scam activity. |
| `/api/smartcontract/<contract_address>/` | GET    | Analyzes smart contract security.            |
| `/api/history/`                          | GET    | Fetches past scam analysis results.          |

---

## 🛠️ Future Enhancements

- 🔹 Machine Learning-based scam detection
- 🔹 Real-time blockchain monitoring
- 🔹 User authentication and subscription model
- 🔹 Multi-chain support (Solana, BSC, Polygon)

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature-branch`)
5. Create a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 📬 Contact

- **Twitter**: [@yourhandle](https://twitter.com/shuku_omhlophe)

