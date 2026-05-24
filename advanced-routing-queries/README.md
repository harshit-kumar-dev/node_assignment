# Assignment 02 - Advanced Routing & Queries

This is the second assignment for the **Backend with Node.js** course. It expands on the first assignment by introducing more advanced routing concepts and MongoDB queries, specifically focusing on pagination, sorting, and filtering via query parameters.

## Goal
To build a **Notes Management REST API** from scratch, expanding upon the CRUD operations built previously by adding:
- Route parameters
- Query parameters
- Pagination
- Sorting
- Filtering

## Features Implemented
1. **Core CRUD**:
   - `POST /api/notes` - Create Note
   - `GET /api/notes` - Get All Notes
   - `GET /api/notes/:id` - Get Note by ID
   - `PUT /api/notes/:id` - Replace Note
   - `PATCH /api/notes/:id` - Update Note
   - `DELETE /api/notes/:id` - Delete Note
2. **Filtering**:
   - `GET /api/notes/filter/category?category=work` - Filter by category
   - `GET /api/notes/filter/pinned` - Get pinned notes
   - `GET /api/notes/filter/date-range?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Filter by date range
   - `GET /api/notes/filter?category=work&isPinned=true` - Multiple filters
3. **Pagination**:
   - `GET /api/notes/paginate?page=1&limit=5` - Paginate all notes
   - `GET /api/notes/paginate/category/:category?page=1&limit=5` - Paginate notes by category
4. **Sorting**:
   - `GET /api/notes/sort?sortBy=createdAt&order=asc` - Sort all notes
   - `GET /api/notes/sort/pinned?sortBy=updatedAt&order=desc` - Sort pinned notes
5. **Additional Utilities**:
   - `GET /api/notes/:id/summary` - Get note summary

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- nodemon

## Setup & Run
1. Navigate to the `advanced-routing-queries` folder.
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
