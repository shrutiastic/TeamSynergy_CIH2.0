# Aries: DeFi Risk Analysis Engine

<div align="center">
  <h3>Developed by Team Synergy</h3>
  <p>Created by Aakif Mudel</p>
</div>

## Project Status

**Current Implementation Status:**

✅ **Fully Implemented:**
- Multi-wallet connection service (MetaMask, WalletConnect, Coinbase, Phantom)
- Event-driven architecture for wallet state management
- Cross-chain compatibility between Ethereum and Solana
- Wallet connection UI components

🔄 **Partially Implemented:**
- Basic risk visualization dashboard (functional UI with some mock data)
- Portfolio overview components (connected to real wallet data)
- Smart contract analysis interface (UI implemented, backend partially functional)

🔶 **Mock Implementation:**
- Advanced risk metrics and AI analysis (currently using simulated data)
- Banking integration (UI flow implemented with mock data)
- Zero-Knowledge Proof system (conceptual implementation)

## Overview

Aries is a next-generation AI-powered Risk Advisory Platform that addresses the challenges in DeFi risk visibility, credit exposure, and smart contract security. The platform combines traditional banking data with blockchain analytics to provide a comprehensive view of financial risk across both worlds.

## 🚀 Live Demo

Experience the Aries platform: [https://itsaakif.github.io/Aries](https://itsaakif.github.io/Aries)

## ✨ Key Features

### 1. Real-Time Risk Assessment for DeFi Portfolios
- Multi-chain data integration (Ethereum, Polygon) via Moralis and Alchemy APIs
- AI/ML-powered analysis of wallet risk exposure, token volatility, and smart contract vulnerabilities
- Predictive risk scoring using Value at Risk (VaR), Sharpe Ratio, and sentiment analysis

### 2. Web3 + Open Banking Integration
- Seamless connection of crypto wallets (MetaMask, WalletConnect) and traditional bank accounts
- Unified view of financial assets across DeFi and traditional banking
- Hybrid risk profiling with cross-asset correlation analysis

### 3. Interactive XR Dashboard
- Immersive 3D visualization of portfolio risk using Three.js and WebXR
- Interactive smart contract flow visualization
- Support for desktop, mobile, and VR/AR experiences

### 4. Zero-Knowledge Proof for Privacy-Preserving Credit Scoring
- ZK-SNARKs implementation for sharing financial credibility without exposing sensitive data
- Verifiable credential system for cross-platform use
- Optional NFT tokenization of credit scores

## 🛠️ Technology Stack

### Frontend
- **React.js (v18.3.1)** with **TypeScript (v5.5.3)**
- **Vite (v5.4.1)** for fast development and building
- **TailwindCSS (v3.4.11)** for styling
- **Three.js (v0.161.0)** for 3D visualizations
- **Chart.js (v4.4.9)** and **Recharts (v2.12.7)** for data visualization
- **Ethers.js (v6.14.1)** for blockchain interactions

### Backend
- **Node.js with Express** for API services
- **Python** for risk analysis algorithms
- **JWT** for authentication

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ItsAakif/Aries.git
   cd Aries
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Start the backend server (optional for full functionality)**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:5173`

## 📱 Application Structure

```
aries/
├── src/                  # Frontend source code
│   ├── assets/           # Images, fonts, and other static assets
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Application pages
│   │   ├── Dashboard.tsx # Main dashboard
│   │   ├── immersivedash.html # 3D immersive dashboard
│   │   └── ...           # Other feature pages
│   ├── services/         # API services and utilities
│   └── utils/            # Helper functions
├── backend/              # Backend services
│   ├── controllers/      # API controllers
│   ├── models/           # Data models
│   ├── routes/           # API routes
│   └── services/         # Business logic
└── public/               # Public assets
```

## 🔍 Features Walkthrough

1. **Dashboard**: The main interface showing portfolio overview, risk metrics, and navigation to all features.

2. **3D Risk Visualization**: Experience immersive risk visualization with interactive 3D models and VR support.

3. **Banking Integration**: Connect traditional bank accounts and view unified financial data.

4. **Smart Contract Analysis**: Scan and verify smart contracts for vulnerabilities and compliance.

5. **Privacy Center**: Generate and manage Zero-Knowledge Proofs for private data sharing.

6. **Wallet Risk Profile**: Analyze risk factors and security metrics for any Ethereum wallet.

## 🧪 Testing

```bash
# Run tests
npm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- HackVyuha 2025 - Shri BM Patil Foundation for the challenge
- All open-source libraries and frameworks used in this project
