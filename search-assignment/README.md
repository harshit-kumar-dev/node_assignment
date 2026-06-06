# Assignment 03: Search APIs & Combined Queries

## Goal
The culmination of the Notes Management API projects. This assignment incorporates everything from previous iterations (CRUD, params, pagination, sorting) and introduces robust **search functionality** using MongoDB `$regex`. It combines search with filtering, sorting, and pagination dynamically.

## Features
- Fully functional CRUD and bulk operations.
- Text search using MongoDB `$regex` capabilities.
- Independent endpoints for searching by title, content, or both.
- Combined query endpoints that handle complex parameter combinations dynamically.
- A master query endpoint that supports simultaneous search, filtering, sorting, and pagination.

## Prerequisites
- Node.js installed
- MongoDB URI (local or MongoDB Atlas)

## Installation & Setup

1. Clone the repository and navigate to this directory:
   ```bash
   cd search-assignment
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of this project:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server in development mode:
   ```bash
   npm run dev
   ```

## API Endpoints

### Standard & Bulk CRUD
- `POST /api/notes` - Create Note
- `POST /api/notes/bulk` - Create Bulk Notes
- `GET /api/notes` - Get All Notes
- `GET /api/notes/:id` - Get Note by ID
- `PUT /api/notes/:id` - Replace Note
- `PATCH /api/notes/:id` - Update Note
- `DELETE /api/notes/:id` - Delete Note
- `DELETE /api/notes/bulk` - Delete Bulk Notes

### Search Endpoints
- `GET /api/notes/search` - Search by Title (`?q=...`)
- `GET /api/notes/search/content` - Search by Content (`?q=...`)
- `GET /api/notes/search/all` - Search Title and Content (`?q=...`)

### Combined Feature Endpoints
- `GET /api/notes/filter-sort` - Combine Filtering & Sorting
- `GET /api/notes/filter-paginate` - Combine Filtering & Pagination
- `GET /api/notes/sort-paginate` - Combine Sorting & Pagination
- `GET /api/notes/search-filter` - Combine Search & Filtering
- `GET /api/notes/search-sort-paginate` - Combine Search, Sorting, & Pagination
- `GET /api/notes/filter-sort-paginate` - Combine Filtering, Sorting, & Pagination

### The Master Query Endpoint
- `GET /api/notes/query` - A single endpoint supporting any combination of search (`q`), filtering (`category`, `isPinned`), sorting (`sortBy`, `order`), and pagination (`page`, `limit`). Example:
  ```http
  GET /api/notes/query?q=meeting&category=work&isPinned=true&sortBy=createdAt&order=desc&page=1&limit=5
  ```

## Postman Collection
A `postman_collection.json` file is included in this repository. You can import it directly into Postman to easily test all 18 endpoints provided by this assignment.
