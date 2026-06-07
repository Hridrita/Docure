# Docure 🏥

**Docure** is a comprehensive online Doctor Appointment & Management System built with **Next.js 15**, **Better Auth**, and an **Express.js** backend connected to **MongoDB**. It allows users to browse doctors, view detailed profiles, and manage their health journey through a secure dashboard.


## 🌐 Live Demo

* **Frontend:** https://docure-lyart.vercel.app
* **Backend:** https://docure-server.vercel.app


## ✨ Key Features

### 🔐 Authentication (Better Auth)

* **Secure Access:** Email/Password authentication.
* **Session Handling:** Persistent user sessions using `useSession` hook.
* **Route Protection:** Middleware restricts unauthorized access to profile and appointment pages.
* **Profile Management:** Update user name and avatar via a dynamic dashboard modal.

### 👩‍⚕️ Doctor & Appointment System

* **Doctor Discovery:** Browse doctors by category, experience, and fee.
* **Smart Booking:** Book appointments with specific time slots.
* **Appointment Lifecycle:** -
* **Create:** Book new appointments seamlessly.
* **Read:** View a dedicated "My Appointments" dashboard.
* **Update:** Edit appointment details (date/time/reason) using an interactive modal.
* **Delete:** Cancel or remove appointments if needed.


## 🛠️ Tech Stack

### Frontend

| Tech | Purpose |
| --- | --- |
| Next.js 15 (App Router) | Framework |
| Tailwind CSS | Styling |
| Better Auth | Authentication |
| HeroUI | UI Components |
| React Hook Form | Form handling |
| React Hot Toast, Sonner | User notifications |

### Backend

| Tech | Purpose |
| --- | --- |
| Node.js + Express | API Server |
| MongoDB | Database |
| JWT (`jose-cjs`) | Token Verification |
| CORS | Security |


## 🗃️ API Endpoints

Base URL: https://docure-server.vercel.app/doctors

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/doctors` | Get all doctors |
| GET | `/doctors/:id` | Get single doctor details |
| POST | `/bookings` | Create a new appointment |
| GET | `/bookings/:userId` | Get all appointments for a user |
| **PATCH** | `/bookings/:id` | **Update/Edit an existing appointment** |
| **DELETE** | `/bookings/:id` | **Delete/Cancel an appointment** |

> **Note:** All `POST`, `PATCH`, and `DELETE` requests are protected by a `verifyToken` middleware to ensure data privacy.


## 🚀 Getting Started

### 1. Clone & Setup

```bash
git clone https://github.com/your-username/docure.git
cd docure
npm install

```

### 2. Run Locally

* **Start Backend:** Navigate to the backend folder and run `npm run server` (or `nodemon index.js`).
* **Start Frontend:** Run `npm run dev` in the root folder.

---

## 🖥️ Pages Overview

* `/` → Home (Banner, Featured Doctors)
* `/appointments` → View all doctors
* `/dashboard/my-profile` → User profile & update settings
* `/dashboard/my-appointments` → Manage (View, Edit, Delete) appointments
* `/login` / `/register` → Authentication flow

---

