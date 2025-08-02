# 📚 Library Management System

## 📌 Overview
The **Library Management System** is a Node.js application for managing books, borrowers, and the borrowing process.  
It allows adding, updating, deleting, and searching for books and borrowers, as well as tracking borrowing and due dates.

## 🚀 Features

✅ **Manage Books** – Add, update, delete, and view books in the library.  
✅ **Manage Borrowers** – Add, update, delete, and view borrower records.  
✅ **Borrow & Return Books** – Borrowers can borrow books and return them.  
✅ **Book Search** – Search books by title, author, or ISBN.  
✅ **Overdue Tracking** – Identify books that are overdue and who borrowed them.  
✅ **Rate Limiting** – Limit requests on sensitive endpoints to prevent abuse.  
✅ **API Documentation** – Interactive Swagger docs available at `/api-docs`.  
✅ **CSV Reports** –  
   - Borrowing records for a specific date range  
   - Overdue borrows from the last month  
   - All borrow records from the last month  

## 🔮 Upcoming Work

- [ ] **Docker Support** – Dockerize the application using `docker-compose`.  
- [ ] **Authentication** – Implement basic authentication for API access.  
- [ ] **Unit Testing** – Add Jest-based tests for controllers and services.  

---

## 🛠 Tech Stack
- **Backend:** Node.js + Express
- **ORM:** Sequelize
- **Database:** MySQL
- **Security:** Helmet
- **Environment Variables:** dotenv
- **Documentation:** Swagger UI + Redoc
- **Rate Limiting:** express-rate-limit

---

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
After starting the application, you can access the live, interactive API documentation here: 
```
 http://localhost:3000/api-docs
```
### Raw OpenAPI Spec
If you need the raw OpenAPI (Swagger) JSON:
```
http://localhost:3000/api-docs-json
```

### Offline API Documentation
We also provide offline documentation generated from the latest API:
- API_Documentation.html – Interactive HTML (works offline) : https://github.com/AhmedSaid25/Library-Management-System/blob/main/api-docs.html

- API_Documentation.pdf – Printable PDF : https://github.com/AhmedSaid25/Library-Management-System/blob/main/docs/APIs%20Document.pdf

### Regenerate API Docs
If you make changes to the API, regenerate docs with:
```
# Export Swagger JSON
curl http://localhost:3000/api-docs-json -o swagger.json

# Generate offline HTML (Redoc)
npx redoc-cli bundle swagger.json -o docs/API_Documentation.html --options.inlineSpec=true
```

### 📊 Database Design
The full database schema and ERD are available in the design document:

📄 Library Management System – Database Design (https://github.com/AhmedSaid25/Library-Management-System/blob/main/docs/Library_Management_Database_Design.pdf)

### 🔒 Security
Helmet for setting HTTP security headers

dotenv for secure environment variable management

SQL Injection prevention via Sequelize
