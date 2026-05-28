# Backend with Node.js - Projects & Assignments

This repository contains all the assignments and projects completed as part of the **Backend with Node.js** course. The focus of these projects is building RESTful APIs using Node.js, Express, and MongoDB (via Mongoose).

## Table of Contents
1. [Assignment 01: Notes Management REST API](#assignment-01-notes-management-rest-api)
2. [Assignment 02: Advanced Routing & Queries](#assignment-02-advanced-routing--queries)
3. [Assignment 03: Search APIs](#assignment-03-search-apis)

---

### [Assignment 01: Notes Management REST API](./notes-app)
**Directory**: `notes-app/`  
**Description**: The first assignment focuses on the fundamentals of backend development. It involves establishing a connection to MongoDB, defining a Mongoose schema, setting up an MVC architecture, and implementing standard CRUD operations with the correct HTTP methods.

**Key Concepts**:
- REST API Design
- Database connection
- Schema design
- MVC (Model-View-Controller) pattern
- CRUD operations (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)

---

### [Assignment 02: Advanced Routing & Queries](./advanced-routing-queries)
**Directory**: `advanced-routing-queries/`  
**Description**: This assignment extends the basic CRUD functionality built in Assignment 01 by introducing advanced MongoDB querying techniques and complex routing scenarios.

**Key Concepts**:
- Route parameters vs. Query parameters
- MongoDB sorting algorithms
- Pagination implementation (Limit, Skip, Total Pages)
- Filtering records dynamically via query parameters

---

### [Assignment 03: Search APIs](./search-assignment)
**Directory**: `search-assignment/`  
**Description**: The final assignment of this series combines all previously learned concepts with search functionalities using MongoDB's `$regex` operator. It involves writing master endpoints that can search, filter, sort, and paginate all simultaneously. 

**Key Concepts**:
- MongoDB `$regex` for case-insensitive and partial string matching
- Combining queries using `$or` and other logical operators
- Complex query parameters parsing
- Building dynamic filters alongside sorting and pagination parameters

---

## General Setup Instructions
Each project is fully standalone. To run any of the projects locally:

1. Navigate to the desired project directory (e.g., `cd notes-app`).
2. Run `npm install` to install all necessary dependencies.
3. Create a `.env` file referencing the provided `.env.example` file and insert your MongoDB URI.
4. Run the development server with `npm run dev`.

*Note: You can find a Postman collection in the Assignment 03 folder to test the advanced endpoints directly.*