# 📝 Task Management System - NexTask

A full-stack **Task Management Web Application** built with **JavaScript / Node.js** that allows users to create, organize, and track tasks with priorities, deadlines, and secure authentication.

---

## 🚀 Features

- 🔐 **User Authentication** — Secure login and registration system
- ✅ **Task Management** — Create, update, and delete tasks with ease
- 🏷️ **Priority Levels** — Assign priority levels (Low, Medium, High) to tasks
- 📅 **Deadlines** — Set and track due dates for each task
- 💾 **Database Storage** — Persistent data storage across sessions
- 🌐 **Web Interface** — Clean and responsive web-based UI

---

## 🛠️ Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Backend    | Node.js / Express.js |
| Frontend   | HTML, CSS, JavaScript |
| Database   | MongoDB / MySQL      |
| Auth       | JWT / Sessions       |

---

## 📁 Project Structure

```
TASK_MANAGEMENT_SYSTEM/
├── controllers/        # Route handler logic
├── models/             # Database models/schemas
├── routes/             # API route definitions
├── views/              # Frontend templates
├── public/             # Static assets (CSS, JS, images)
├── middleware/         # Auth & validation middleware
├── .env                # Environment variables (not committed)
├── package.json        # Project dependencies
└── server.js           # Application entry point
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/)
- A running instance of your database (MongoDB / MySQL)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HayyanHaider/TASK_MANAGEMENT_SYSTEM.git
   cd TASK_MANAGEMENT_SYSTEM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   DB_URI=your_database_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the application**
   ```bash
   npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📌 API Endpoints

| Method | Endpoint              | Description              | Auth Required |
|--------|-----------------------|--------------------------|---------------|
| POST   | `/api/auth/register`  | Register a new user      | ❌            |
| POST   | `/api/auth/login`     | Login and get token      | ❌            |
| GET    | `/api/tasks`          | Get all tasks for user   | ✅            |
| POST   | `/api/tasks`          | Create a new task        | ✅            |
| PUT    | `/api/tasks/:id`      | Update a task            | ✅            |
| DELETE | `/api/tasks/:id`      | Delete a task            | ✅            |

---

## 🔒 Authentication

This project uses **JWT (JSON Web Tokens)** for secure user authentication. After logging in, a token is issued and must be included in the headers of protected requests:

```
Authorization: Bearer <your_token>
```

---
