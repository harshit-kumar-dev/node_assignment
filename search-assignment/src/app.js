const express = require("express");
const noteRoutes = require("./routes/note.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/notes", noteRoutes);

module.exports = app;
