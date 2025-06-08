# JobHunt Portal

A production-ready full-stack Job Portal application built using the **MERN stack** with **real-time chat** support using **WebSockets**.

## 🔥 Features

- User authentication with JWT (Login/Register)
- Recruiter dashboard to post/manage jobs
- Candidate dashboard to view/apply to jobs
- Real-time chat (Socket.IO) activated when recruiter selects a candidate's resume
- Resume upload, job application tracking
- Admin-level session control (single-session login, forced logout)
- Frontend: React.js + Tailwind CSS
- Backend: Node.js + Express.js + MongoDB

## ⚙️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (Access + Refresh Tokens)
- **Real-time Communication:** Socket.IO
- **File Uploads:** Multer + Cloudinary
- **Version Control:** Git, GitHub

## 🚀 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/jobhunt-portal.git
cd jobhunt-portal

# Install dependencies
cd frontend && npm install
cd ../backend && npm install

# Create .env files in frontend and backend with your config

# Run backend
cd backend
npm run start

# Run frontend
cd ../frontend
npm start
