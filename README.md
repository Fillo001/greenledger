
# 🌍 GreenLedger — Proof of Climate Action on Hedera

**Track:** DLT for Operations (Hedera Africa Hackathon 2025)

GreenLedger is a **Hedera-powered transparency platform** that records and verifies environmental actions (tree planting, recycling, clean water, clean energy) and makes them **auditable, visible, and rewardable**.

## 🔧 What we’re building (MVP)
- **Immutable Proof of Action**: submit geo-tagged events to **Hedera Consensus Service (HCS)**
- **Simple Dashboard UI** (Next.js): form to submit actions
- **API (Express)**: verifies input and writes to HCS
- **Optional Token** (ERC-20 style) for future rewards

## 🌱 Why Hedera
- Low-fee, high-throughput, carbon-negative network
- HCS for cheap, immutable logging
- HTS/Smart Contracts for tokenized incentives (future)

## 🗺️ Architecture (MVP)
Frontend → Backend API → Hedera Consensus Service (Topic)

## 🧪 Run locally

### Backend
```bash
cd backend
npm install
cp .env.example .env # fill OPERATOR_ID and OPERATOR_KEY, optionally HEDERA_TOPIC_ID
npm start
