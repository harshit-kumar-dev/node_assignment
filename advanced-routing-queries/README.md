# Assignment 02: Advanced Routing & Queries

## Goal
A fresh implementation of the Notes Management API that rebuilds the foundation and introduces advanced routing and database querying features. This includes route parameters, query parameters, pagination, sorting, and filtering.

## Features
- Standard CRUD operations (Create, Read, Update, Delete).
- Bulk operations (Create multiple, Delete multiple).
- Data filtering (by category, pinned status, date ranges).
- Data sorting (ascending/descending by various fields).
- Pagination to handle large datasets effectively.
- Comprehensive endpoint separation and routing order management.

## Prerequisites
- Node.js installed
- MongoDB URI (local or MongoDB Atlas)

## Installation & Setup

1. Clone the repository and navigate to this directory:
   ```bash
   cd advanced-routing-queries
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

### CRUD & Bulk Operations
- `POST /api/notes` - Create a single note
- `POST /api/notes/bulk` - Create multiple notes at once
- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get note by ID
- `GET /api/notes/:id/summary` - Get brief summary of note
- `PUT /api/notes/:id` - Replace a note
- `PATCH /api/notes/:id` - Update a note partially
- `DELETE /api/notes/:id` - Delete a note
- `DELETE /api/notes/bulk` - Delete multiple notes using an array of IDs

### Sorting Endpoints
- `GET /api/notes/sort` - Sort notes (e.g., `?sortBy=createdAt&order=desc`)
- `GET /api/notes/sort/pinned` - Sort pinned notes specifically

### Pagination Endpoints
- `GET /api/notes/paginate` - Paginate notes (e.g., `?page=1&limit=5`)
- `GET /api/notes/paginate/category/:category` - Paginate notes within a specific category

### Filtering Endpoints
- `GET /api/notes/filter` - Filter notes using query parameters (e.g., `?isPinned=true&category=work`)
- `GET /api/notes/filter/pinned` - Get all pinned notes
- `GET /api/notes/filter/category` - Get notes grouped by a specific category
- `GET /api/notes/filter/date-range` - Filter notes between specific dates (e.g., `?startDate=...&endDate=...`)

*Note: In Express, static routes must be defined before dynamic parameterized routes (`/:id`) to prevent path collision.*
