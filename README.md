# 🌀 Gujarat Cyclone Early Warning System
### AI-Driven Cyclone & Coastal Disaster Management Platform

> **Challenge 6 — IBM Bob × IBM Granite LLM × IBM Cloud**  
> Built for Gujarat's 1,600+ km coastline and 3.5 lakh fishing community

---

## 🎯 Overview

This system provides hyperlocal cyclone tracking, fishermen safety alerts, evacuation planning, relief coordination, and post-disaster assessment — all powered by **IBM Granite LLM** on **IBM Cloud (WatsonX AI)**.

## 🤖 AI Agents

| Agent | Capability | IBM Granite Role |
|-------|-----------|-----------------|
| 🌀 **Cyclone Track & Intensity** | Predicts track, landfall, storm surge with 12/24/48h forecast | LLM-based IMD meteorology analysis |
| ⚓ **Fishermen Safety Alert** | Issues return-to-harbor warnings, SMS in Gujarati/English | Maritime risk assessment & alert generation |
| 🚗 **Evacuation Route Planning** | Optimizes routes, shelters, special-needs logistics | Population logistics optimization |
| 🏥 **Relief Resource Coordination** | Pre-positions NDRF, food, water, medical supplies | Resource gap analysis & allocation |
| 📊 **Post-Disaster Damage Assessment** | Panchnama guidelines, compensation estimates, recovery timeline | PDNA-standard damage quantification |

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  Next.js Dashboard (Port 3000)              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐  │
│  │ Cyclone  │ │Fishermen │ │Evacuation│ │Relief/Damage │  │
│  │ Tracker  │ │  Alerts  │ │  Routes  │ │  Assessment  │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘  │
├─────────────────────────────────────────────────────────────┤
│              Next.js API Routes (/api/*)                    │
│  /api/cyclone  /api/fishermen  /api/evacuation              │
│  /api/relief   /api/damage     /api/status                  │
├─────────────────────────────────────────────────────────────┤
│              Agent Layer (TypeScript)                       │
│  cyclone-agent.ts  fishermen-agent.ts  evacuation-agent.ts │
│  relief-agent.ts   damage-agent.ts                         │
├─────────────────────────────────────────────────────────────┤
│              IBM Granite Client (granite-client.ts)         │
│  WatsonX AI → IBM Granite 13B Instruct v2                  │
├─────────────────────────────────────────────────────────────┤
│              MCP Server (mcp-server/)                       │
│  6 MCP Tools exposing all agents to IBM Bob                │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### 1. Install dependencies

```bash
cd cyclone-warning-system
npm install
```

### 2. Configure IBM Cloud credentials

Edit `.env.local`:

```env
WATSONX_API_KEY=your_ibm_watsonx_api_key
WATSONX_PROJECT_ID=your_watsonx_project_id
WATSONX_URL=https://us-south.ml.cloud.ibm.com
GRANITE_MODEL_ID=ibm/granite-13b-instruct-v2
```

> ℹ️ Without API keys, the system runs in **demo mode** with realistic simulated Granite responses.

### 3. Run the dashboard

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build and register MCP server (for IBM Bob)

```bash
cd mcp-server
npm install
npm run build
```

Register in Bob's `mcp.json`:

```json
{
  "mcpServers": {
    "cyclone-disaster-agents": {
      "command": "node",
      "args": ["C:/ibm/cyclone-warning-system/mcp-server/build/index.js"],
      "env": {
        "WATSONX_API_KEY": "your_key",
        "WATSONX_PROJECT_ID": "your_project_id",
        "WATSONX_URL": "https://us-south.ml.cloud.ibm.com",
        "GRANITE_MODEL_ID": "ibm/granite-13b-instruct-v2"
      }
    }
  }
}
```

## 🛠️ MCP Tools Available

Once registered with IBM Bob, you can ask:

- *"Predict the track for a cyclone at 18.5°N 65.2°E with 175 km/h winds"*
- *"Issue fishermen alerts for Veraval and Porbandar — landfall in 24 hours"*
- *"Plan evacuation for Kutch and Dwarka districts, 150,000 people, 36 hours to landfall"*
- *"Coordinate relief for 5 affected Gujarat districts"*
- *"Assess damage in Kutch after Category 4 landfall with 4m storm surge"*

## 📁 Project Structure

```
cyclone-warning-system/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main dashboard UI
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── api/
│   │       ├── cyclone/route.ts
│   │       ├── fishermen/route.ts
│   │       ├── evacuation/route.ts
│   │       ├── relief/route.ts
│   │       ├── damage/route.ts
│   │       └── status/route.ts
│   ├── agents/
│   │   ├── cyclone-agent.ts     # Cyclone prediction agent
│   │   ├── fishermen-agent.ts   # Fishermen safety agent
│   │   ├── evacuation-agent.ts  # Evacuation planning agent
│   │   ├── relief-agent.ts      # Relief coordination agent
│   │   └── damage-agent.ts      # Damage assessment agent
│   └── lib/
│       ├── granite-client.ts    # IBM Granite LLM client
│       └── types.ts             # TypeScript type definitions
├── mcp-server/
│   └── src/index.ts             # MCP server (6 tools)
├── .env.local                   # IBM Cloud credentials
└── README.md
```

## 🌊 Gujarat Districts Covered

Kutch · Devbhumi Dwarka · Porbandar · Junagadh · Gir Somnath · Amreli · Bhavnagar · Anand · Bharuch · Surat · Navsari · Valsad

## 🏛️ Institutional Integration

- **GSDMA** — Gujarat State Disaster Management Authority
- **IMD** — India Meteorological Department  
- **Indian Coast Guard** — Maritime safety enforcement
- **NDRF/SDRF** — National/State Disaster Response Force
- **Gujarat Maritime Board** — Harbor and vessel registry
- **IBM WatsonX AI** — Granite LLM inference on IBM Cloud

---

*Built with IBM Bob + IBM Granite LLM + IBM Cloud · Challenge 6 — Disaster Management*
