# 📝 Blogging Platform API

A RESTful Blogging Platform API built with **Node.js and Express.js**, using **MongoDB with Mongoose** for database management.

This project was built as a hands-on backend project to learn **REST API development, Express.js, MongoDB, Mongoose, CRUD operations, query filtering, request handling, and database integration**.

## 🚀 Features

### 📝 Article Management

The API allows users to create and manage blog articles.

Each article can contain:

* Title
* Content
* Author
* Tags
* Published status
* Creation date
* Last updated date

### 🔄 CRUD Operations

The API supports complete CRUD functionality for blog articles.

| Method   | Endpoint            | Description          |
| -------- | ------------------- | -------------------- |
| `POST`   | `/createarticle`     | Create a new article |
| `GET`    | `/getarticles`     | Get all articles     |
| `GET`    | `/getarticlebyid/:id` | Get a single article |
| `PUT`    | `/updatearticlebyid/:id` | Update an article    |
| `DELETE` | `/deletearticlebyid/:id` | Delete an article    |

### 🔎 Article Filtering

Articles can be filtered using query parameters.

Filter by published status:

```text
GET /getarticles?published=true
```

Filter by tag:

```text
GET /getarticles?tag=Node
```

This makes it possible to retrieve specific groups of articles without fetching everything from the database.

## 🛠️ Tech Stack

### Backend

* **Node.js**
* **Express.js**

### Database

* **MongoDB**
* **Mongoose**

### Development Tools

* **VS Code**
* **Postman / Thunder Client**

## 📁 Project Structure

The project follows a simple controller-based Express architecture.

```text
Blogging_Platform_API/
│
├── config/
│   └── db.js
│
├── models/
│   └── Article.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── package-lock.json
```

## 🔄 API Architecture

The application follows a simple request flow:

```text
Client
  │
  ▼
Express Server
  │
  ▼
Mongoose
  │
  ▼
MongoDB
  │
  ▼
JSON Response
```

## 📝 Article Model

Each article follows a structure similar to:

```text
Article
│
├── title
├── content
├── author
├── tags
├── published
├── createdAt
└── updatedAt
```

The model is defined using **Mongoose**, which provides a structured way to interact with MongoDB.

## 📌 API Endpoints

### Create an Article

```http
POST /createarticle
```

Example request:

```json
{
  "title": "Learning Express.js",
  "content": "Express.js is a Node.js framework used to build web servers and APIs.",
  "author": "John",
  "tags": ["Node.js", "Express"],
  "published": true
}
```

---

### Get All Articles

```http
GET /getarticles
```

Returns all available articles.

---

### Filter Articles

Filter by published status:

```http
GET /getarticles?published=true
```

Filter by tag:

```http
GET /getarticles?tag=Node
```

---

### Get a Single Article

```http
GET /getarticlebyid/:id
```

Example:

```http
GET /getarticlebyid/64abc123...
```

Returns the article associated with the specified MongoDB document ID.

---

### Update an Article

```http
PUT /updatearticlebyid/:id
```

Example request:

```json
{
  "title": "Learning Express.js and REST APIs",
  "published": true
}
```

Only the required fields can be modified.

---

### Delete an Article

```http
DELETE /deletearticlebyid/:id
```

Example:

```http
DELETE /deletearticlebyid/64abc123...
```

Deletes the specified article from MongoDB.

## 🗄️ Database

MongoDB is used as the database, while **Mongoose** acts as the ODM (Object Data Modeling) library between the Express application and MongoDB.

The basic flow is:

```text
Express
   ↓
Mongoose Model
   ↓
MongoDB
```

For example, creating an article through Mongoose results in a new MongoDB document being stored in the articles collection.

## 🔐 Environment Variables

The application uses environment variables for configuration.

Create a `.env` file in the project root:

```env
MONGO_URI="your_mongodb_connection_string"
PORT=5000
```

Replace the MongoDB connection string with your own database connection string.

**Do not commit `.env` to GitHub.**

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Shouvanik21/Blogging_Platform_API.git
```

### 2. Navigate into the project

```bash
cd Blogging_Platform_API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file:

```env
MONGO_URI="your_mongodb_connection_string"
PORT=5000
```

### 5. Start the server

```bash
node server.js
```

The API will run at:

```text
http://localhost:5000
```

## 🧪 Testing the API

The API can be tested using **Postman** or **Thunder Client**.

### Create

```http
POST /createarticle
```

### Read

```http
GET /getarticles
```

### Read One

```http
GET /getarticlebyid/:id
```

### Update

```http
PUT /updatearticlebyid/:id
```

### Delete

```http
DELETE /deletearticlebyid/:id
```

## 📚 What I Learned

Through this project, I practiced:

* Building RESTful APIs with Express.js
* Creating Express routes
* Using controllers to organize backend logic
* Connecting Node.js applications to MongoDB
* Using Mongoose as an ODM
* Creating Mongoose schemas and models
* Performing CRUD operations
* Working with MongoDB documents
* Handling route parameters
* Working with query parameters
* Filtering database results
* Handling JSON request bodies
* Managing environment variables
* Handling API errors
* Testing REST APIs

## 🔄 CRUD Flow

The complete article management flow is:

```text
CREATE
  ↓
POST /createarticle
  ↓
MongoDB

READ
  ↓
GET /getarticles
  ↓
MongoDB

UPDATE
  ↓
PUT /updatearticlebyid/:id
  ↓
MongoDB

DELETE
  ↓
DELETE /deletearticlebyid/:id
  ↓
MongoDB
```

## 🎯 Project Purpose

This project was created as a practical backend learning project to understand how **Node.js, Express.js, MongoDB, and Mongoose** work together to build a RESTful API.

It provided hands-on experience with database-backed API development and CRUD operations.
