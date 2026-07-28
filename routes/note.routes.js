import express from "express";
import protect from "../middlewares/auth.middleware.js"
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";

const router = express.Router();

router.post("/",protect, createNote);

router.get("/",protect, getAllNotes);

router.get("/:id",protect, getNoteById);

router.put("/:id", protect, updateNote);

router.delete("/:id", protect, deleteNote);

export default router;``