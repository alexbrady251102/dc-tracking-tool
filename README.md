# DC Tracking Tool

A web-based tool for tracking data centre commissioning tasks, built as part of an internship project at Atlantach Technical Services.

## 🔧 Features

- User login and role-based access (Field User, Lead, Admin)
- Project and task setup with status tracking
- Time tracking for IS/OOS tasks
- CSV reporting for progress and cost tracking
- Clean and responsive frontend (React)
- Simple Node.js backend with SQLite database
- Designed for real-time field data capture and reporting

## 📦 Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express
- **Database**: SQLite (easy to use locally)
- **Version Control**: Git + GitHub

## 🚀 Getting Started

1. Clone this repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dc-tracking-tool.git
   cd dc-tracking-tool
   ```

2. Start the backend:
   ```bash
   cd backend
   npm install
   node server.js
   ```

3. Open `frontend/index.html` in your browser to test the login.

## 📁 Folder Structure

```
dc-tracking-tool/
├── backend/       # Node.js server
├── frontend/      # HTML + JS interface
├── .gitignore
└── README.md
```

## 📚 About

Built by Alex Brady as a real-world software project during a software engineering internship at Atlantach Technical Services. This MVP is designed to help track and report on commissioning progress across data centre projects.
