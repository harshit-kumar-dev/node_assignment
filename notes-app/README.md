# Assignment 01 - Notes Management REST API

This is the first assignment for the **Backend with Node.js** course. It focuses on building a fundamental REST API using Node.js, Express, and MongoDB (via Mongoose).

## Goal
To build a fundamental **Notes Management REST API** focusing on the core principles of backend development:
- Database connection
- Schema design
- MVC (Model-View-Controller) structure
- Basic CRUD operations using correct HTTP methods.

## Features Implemented
- **Create a Note**: `POST /api/notes`
- **Get All Notes**: `GET /api/notes`
- **Get Note by ID**: `GET /api/notes/:id`
- **Replace a Note**: `PUT /api/notes/:id`
- **Update a Note**: `PATCH /api/notes/:id`
- **Delete a Note**: `DELETE /api/notes/:id`

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (for environment variables)
- nodemon (for development)

## Setup & Run
1. Navigate to the `notes-app` folder.
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
All endpoints return responses in the following standard format:
```json
{
  "success": true,
  "message": "Descriptive message here",
  "data": { ... } // or array of objects
}
```

## Structure
```
src/
├── config/
│   └── db.js         # Database configuration
├── controllers/
│   └── note.controller.js  # Request handlers
├── models/
│   └── note.model.js       # Mongoose schema
├── routes/
│   └── note.routes.js      # Express routing
├── app.js            # Express app setup
└── index.js          # Entry point
```
