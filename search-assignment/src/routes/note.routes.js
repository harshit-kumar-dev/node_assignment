const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note.controller");

router.post("/bulk", noteController.createBulkNotes);
router.delete("/bulk", noteController.deleteBulkNotes);
router.post("/", noteController.createNote);
router.get("/", noteController.getAllNotes);
router.get("/sort-paginate", noteController.sortAndPaginate);
router.get("/filter-paginate", noteController.filterAndPaginate);
router.get("/filter-sort", noteController.filterAndSort);
router.get("/search-filter", noteController.searchAndFilter);
router.get("/search/content", noteController.searchByContent);
router.get("/search/all", noteController.searchAll);
router.get("/search", noteController.searchByTitle);
router.get("/:id", noteController.getNoteById);
router.put("/:id", noteController.replaceNote);
router.patch("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;
