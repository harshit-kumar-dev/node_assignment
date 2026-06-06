# Assignment 01: Notes Management REST API (CRUD)

## Goal
Build a Notes Management REST API using Node.js, Express, and MongoDB (Mongoose). This assignment focuses on getting the fundamentals right: database connection, schema design, MVC structure, and basic CRUD operations.

## Features
- Complete MVC (Model-View-Controller) architecture.
- MongoDB connection using Mongoose.
- RESTful endpoints for Create, Read, Update, and Delete operations.
- Data validation and structured JSON responses.

## Prerequisites
- Node.js installed
- MongoDB URI (local or MongoDB Atlas)

## Installation & Setup

1. Clone the repository and navigate to this directory:
   ```bash
   cd notes-app
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of this project and define the following variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server in development mode:
   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/notes` | Create a new note |
| GET | `/api/notes` | Fetch all notes |
| GET | `/api/notes/:id` | Fetch a specific note by ID |
| PUT | `/api/notes/:id` | Replace an existing note completely |
| PATCH | `/api/notes/:id` | Update specific fields of a note |
| DELETE | `/api/notes/:id` | Delete a note by ID |

## Schema Design (Note Model)
- `title` (String): Required, max 100 characters.
- `content` (String): Required.
- `category` (String): Enum (`work`, `personal`, `study`), defaults to `personal`.
- `isPinned` (Boolean): Defaults to `false`.
- Timestamps (`createdAt`, `updatedAt`) are managed automatically by Mongoose.
