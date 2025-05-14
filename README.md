# Crypto Tracker

## 🚀 Introduction

Crypto Tracker is a web application that allows users to view real-time cryptocurrency prices and interactive historical price charts. It uses the public CoinGecko API to fetch updated data and features a modern UI built with Chakra UI.

## 🌐 Live Demo

* **Frontend:** [Crypto Tracker on Netlify](https://crypto-tracker-demo.netlify.app)

## 🛠️ Technologies Used

* **Frontend:** React, Vite, React Query, Chart.js, Chakra UI
* **Data API:** CoinGecko (public API)
* **Deployment:** Netlify

## 📝 Key Features


* Real-time visualization of cryptocurrency prices
* Interactive historical price chart
* Filter by cryptocurrency and fiat currency (USD, EUR, MXN, etc.)
* Modern and responsive UI with Chakra UI
* Automatic price update every 10 seconds

## 🗂️ Project Structure

```
├── src
│ ├── components
│ │ ├── CryptoCard.jsx
│ │ ├── PriceChart.jsx
│ │ └── CurrencySelector.jsx
│ ├── hooks
│ │ ├── useCryptoData.js
│ │ └── useCryptoHistory.js
│ ├── pages
│ │ └── CryptoDashboard.jsx
│ ├── App.jsx
│ └── main.jsx
└── README.md
```

## ⚙️ Installation and Configuration

### Clone the Repository

```
git clone https://github.com/shm04/crypto__tracker.git
cd crypto__tracker
```

```
npm install
```

* Start the client:

```
npm run dev
```

## 🌐 Deployment

### Frontend (Netlify)

1. Create an account on Netlify.
2. Connect the GitHub repository..
3. Deploy the application.

## 🌟 API Endpoints

* **GET /coins/markets** Retrieves the list of cryptocurrencies with current prices.
* **GET /coins/:id/market_chart** Retrieves historical price data for a specific cryptocurrency.

## 💻 Useful Commands

* Start the development server:

```
npm run dev
```

* Build for production:

```
npm run build
```

* Preview the production build:

```
npm run preview
```

## 🤝 Contributions

Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
