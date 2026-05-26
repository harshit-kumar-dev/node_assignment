# Assignment 03 - Search APIs

This is the third assignment for the **Backend with Node.js** course. It expands on the previous assignments by introducing MongoDB `$regex` searching and combining multiple querying operations together (search, filter, sort, and paginate).

## Goal
To build a **Notes Management REST API** from scratch that combines standard CRUD operations with advanced search functionality. Specifically:
- Implement search using MongoDB `$regex` (case-insensitive)
- Combine search with filtering, sorting, and pagination
- Build advanced endpoints that handle multiple query parameters dynamically

## Features Implemented
1. **Core CRUD & Bulk Operations**:
   - `POST /api/notes` - Create Note
   - `POST /api/notes/bulk` - Create Bulk Notes
   - `GET /api/notes` - Get All Notes
   - `GET /api/notes/:id` - Get Note by ID
   - `PUT /api/notes/:id` - Replace Note
   - `PATCH /api/notes/:id` - Update Note
   - `DELETE /api/notes/:id` - Delete Note
   - `DELETE /api/notes/bulk` - Delete Bulk Notes
2. **Search Operations**:
   - `GET /api/notes/search` - Search by Title (`?q=...`)
   - `GET /api/notes/search/content` - Search by Content (`?q=...`)
   - `GET /api/notes/search/all` - Search Title and Content (`?q=...`)
3. **Combined Operations**:
   - `GET /api/notes/filter-sort` - Filter & Sort combined
   - `GET /api/notes/filter-paginate` - Filter & Paginate combined
   - `GET /api/notes/sort-paginate` - Sort & Paginate combined
   - `GET /api/notes/search-filter` - Search & Filter combined
   - `GET /api/notes/search-sort-paginate` - Search, Sort, & Paginate combined
   - `GET /api/notes/filter-sort-paginate` - Filter, Sort, & Paginate combined
4. **Master Query**:
   - `GET /api/notes/query` - A single endpoint supporting all functionalities simultaneously (Search, Filter, Sort, and Paginate)

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- nodemon

## Setup & Run
1. Navigate to the `search-assignment` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the `.env` file using the `.env.example` as a template:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Start the server:
   - For development: `npm run dev`
   - For production: `npm start`

## API Testing
A `postman_collection.json` file is included in this repository. You can import it directly into Postman to test all 18 endpoints systematically.

## Standard JSON Response Format
All endpoints return responses in the following standard format, including pagination metadata when applicable:
```json
{
  "success": true,
  "message": "Descriptive message here",
  "data": { ... },
  "pagination": {
    "total": 10,
    "page": 1,
    "limit": 5,
    "totalPages": 2,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```
