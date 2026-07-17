
```markdown
# 📝 Task Management System - NexTask

A containerized, full-stack **Task Management Web Application** built with **React**, **Node.js / Express**, and **Microsoft SQL Server**. This application allows users to create, organize, and track tasks with priorities, budgets, and secure authentication, all running in a seamless Docker environment.

---

## 🚀 Features

*   🐳 **Multi-Container Architecture** — Orchestrated using Docker Compose for effortless local setup.
*   💾 **Persistent Database** — Powered by MS SQL Server 2022 with a persistent Docker volume, ensuring your data survives container restarts.
*   ⚡ **Automated DB Initialization** — Auto-creates the required databases (`DB_PHASE4`) and sets up seed data out of the box.
*   🔐 **User Authentication** — Secure login and registration system using JWT (JSON Web Tokens).
*   ✅ **Task & Budget Tracking** — Manage projects, budgets, tasks, and subtasks seamlessly.
*   🌐 **Modern Web Interface** — Clean, responsive React-based user interface.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React |
| **Backend** | Node.js / Express.js |
| **Database** | Microsoft SQL Server (MSSQL 2022) |
| **Orchestration** | Docker / Docker Compose |
| **Auth** | JWT (JSON Web Tokens) |

---

## 📁 Project Structure

Your repository is split into clean microservices managed by Docker:

```text
TASK_MANAGEMENT_SYSTEM/
├── backend/            # Node.js Express Backend
│   ├── controllers/    # Route handler logic
│   ├── models/         # MSSQL database schemas/queries
│   ├── routes/         # API endpoint definitions
│   └── server.js       # Backend entry point
├── frontend/           # React Frontend App
│   ├── src/            # React components, state, and styles
│   └── package.json    
├── docker-compose.yml  # Multi-container Docker configuration
├── .env                # Global environment variables (Do NOT commit)
└── README.md           # Project documentation

```

---

## ⚙️ Getting Started

### Prerequisites

To run this application locally, you only need one tool installed on your machine:

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)

No need to install Node.js, npm, or SQL Server locally!

---

### Setup & Installation

#### 1. Clone the repository

```bash
git clone [https://github.com/HayyanHaider/TASK_MANAGEMENT_SYSTEM.git](https://github.com/HayyanHaider/TASK_MANAGEMENT_SYSTEM.git)
cd TASK_MANAGEMENT_SYSTEM

```

#### 2. Configure Environment Variables

Create a `.env` file in the **root directory** of the project:

```env
PORT=5000
DB_PASSWORD=your_secure_database_password
JWT_SECRET=your_super_secret_jwt_key

```

#### 3. Build and Run the Containers

Spin up your entire ecosystem (Database, Initializer, Backend, and Frontend) with a single command:

```bash
docker compose up -d --build

```

#### 4. Access the Application

Once the containers are up and running, you can access the services:

* 🌐 **React Frontend:** `http://localhost:3000`
* ⚡ **Express Backend:** `http://localhost:5000`
* 🛢️ **MS SQL Server Connection:** `localhost,1433` (User: `SA`, Password: [Your DB Password configured in .env])

---

## 📌 API Endpoints

| Method | Endpoint | Description | Auth Required |
| --- | --- | --- | --- |
| **POST** | `/api/auth/register` | Register a new user | ❌ |
| **POST** | `/api/auth/login` | Login and retrieve JWT Token | ❌ |
| **GET** | `/api/tasks` | Get all tasks for the logged-in user | ✅ |
| **POST** | `/api/tasks` | Create a new task | ✅ |
| **PUT** | `/api/tasks/:id` | Update an existing task | ✅ |
| **DELETE** | `/api/tasks/:id` | Delete a task | ✅ |

---

## 🔒 Authentication

This project secures API routes using **JWT**. When making requests to protected endpoints from your frontend or API client, include the token in the headers:

```http
Authorization: Bearer <your_jwt_token>

```

---

## 🛑 Stopping the App

To shut down the containers while preserving all database records (thanks to the volume configuration):

```bash
docker compose down

```

If you ever need to reset the database and completely wipe the persistent volume, run:

```bash
docker compose down -v

```

```

```