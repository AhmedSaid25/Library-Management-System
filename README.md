# 📚 Library Management System

## 📌 Overview
The **Library Management System** is a Node.js application for managing books, borrowers, and the borrowing process.  
It allows adding, updating, deleting, and searching for books and borrowers, as well as tracking borrowing and due dates.

## 🎯 Objective
Design and implement a simple library management system to manage books and borrowers efficiently.

---

## 🛠 Tech Stack
- **Backend:** Node.js + Express
- **ORM:** Sequelize
- **Database:** MySQL
- **Security:** Helmet
- **Environment Variables:** dotenv

---

## 📂 Project Structure
```
Library-Management-System/
│-- src/
│ ├── config/ # Database configuration 
│ ├── models/ # Sequelize models
│ ├── controllers/ # Request handlers
│ ├── routes/ # API routes
│ ├── middlewares/ # Security & validation middleware
│ └── index.js # Application entry point
│
│-- docs/
│ └── Library_Management_Database_Design.pdf
│
├── package.json
├── .env
└── README.md
```
---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install
```
### 2️⃣ Configure Environment Variables
Create a .env file in the project root:
```
env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=library_db
DB_DIALECT=mysql
PORT=3000
```
### 3️⃣ Create Database
Make sure MySQL is running, then:

CREATE DATABASE library_db;

### 4️⃣ Run the Application
npm start


##### The database tables will be created automatically via:
sequelize.sync()

### 📖 API Documentation
The API documentation will be available in Swagger once implemented.

### 📊 Database Design
The full database schema and ERD are available in the design document:

📄 Library Management System – Database Design [docs](Library_Management_Database_Design.pdf)

### 🔒 Security
Helmet for setting HTTP security headers

dotenv for secure environment variable management

SQL Injection prevention via Sequelize
