# Node.js Backend Assignments

This repository contains the completion of the backend assignments using **Node.js, Express, and MongoDB (Mongoose)**. The assignments progressively build a Notes Management REST API from basic CRUD operations to advanced search and pagination capabilities.

## Repository Structure

The repository is organized into three main assignment directories:

### 1. [Assignment 01: Basics & CRUD](./notes-app)
**Directory**: `notes-app`
The foundation of the Notes Management API. Focuses on setting up the backend server, connecting to MongoDB, schema design, MVC architecture, and implementing all fundamental CRUD (Create, Read, Update, Delete) operations using appropriate HTTP methods.

### 2. [Assignment 02: Advanced Routing & Queries](./advanced-routing-queries)
**Directory**: `advanced-routing-queries`
An extension of the basic Notes API. This assignment introduces complex routing capabilities including path parameters, query parameters, data sorting, record pagination, filtering, and bulk operations. Built from scratch to reinforce fundamentals.

### 3. [Assignment 03: Search APIs](./search-assignment)
**Directory**: `search-assignment`
The most advanced version of the Notes API. Integrates MongoDB `$regex` for comprehensive search capabilities (by title, content, or both). It dynamically combines search queries with filters, sorting, and pagination, culminating in a powerful master query endpoint. Built from scratch with clean, beginner-friendly code.

## Technology Stack
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.

## Getting Started

Each assignment is a standalone project. To run any of the assignments locally:

1. Navigate to the desired assignment directory:
   ```bash
   cd notes-app # or advanced-routing-queries or search-assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (copy `.env.example` to `.env` and provide your `MONGO_URI` and `PORT`).
4. Start the development server:
   ```bash
   npm run dev
   ```

Detailed documentation and endpoint references are available in the `README.md` file within each project directory.