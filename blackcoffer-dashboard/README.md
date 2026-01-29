# Blackcoffer Visualization Dashboard

An interactive data visualization dashboard built using the provided Blackcoffer JSON dataset.  
The project stores data in MongoDB, exposes it through a REST API, and displays insights using a modern React dashboard.

🌐 **Live Demo:** https://your-deployed-link-here.com  
🔗 **Backend API:** https://your-backend-link-here.com  

---

## ✨ Features

- Import JSON data into MongoDB  
- REST API with dynamic filtering  
- Interactive charts:
  - Topics Distribution  
  - Region Share  
  - Intensity Trend by Year  
- Filters:
  - Topic  
  - Sector  
  - Region  
  - PESTLE  
  - Country  
- Clean, responsive, modern UI  

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Frontend:** React (Vite)  
- **Charts:** Chart.js  

---

## 📁 Project Structure

blackcoffer-dashboard/
├── backend/
│ ├── server.js
│ ├── importJson.js
│ ├── jsondata.json
│ ├── models/
│ │ └── Data.js
│ └── routes/
│ └── dataRoutes.js
└── frontend/
└── src/
├── App.jsx
├── api.js
└── components/
├── Dashboard.jsx
├── Filters.jsx
└── Charts.jsx


---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19+ or v22+)  
- MongoDB (local or cloud)

---

### Backend Setup

```bash
cd backend
npm install
node importJson.js
node server.js
Backend will run at:

http://localhost:5000
Frontend Setup
cd frontend
npm install
npm run dev
Frontend will run at:

http://localhost:5173
📊 Dashboard Overview
KPI cards for:

Total Records

Average Intensity

Average Likelihood

Interactive charts with modern UI

Dynamic filters with dropdown + typing support

Real-time data updates from MongoDB via API

This project demonstrates end-to-end full-stack development skills in:

Data ingestion & storage

API design with filtering

Frontend state management

Modern UI & data visualization

::contentReference[oaicite:0]{index=0}