const createNote = (req, res) => {
  res.json({ message: "Create Note route is working." });
};

const getAllNotes = (req, res) => {
  res.json({ message: "Get All Notes route is working." });
};

const getNoteById = (req, res) => {
  res.json({ message: "Get Note route is working." });
};

const updateNote = (req, res) => {
  res.json({ message: "Update Note route is working." });
};

const deleteNote = (req, res) => {
  res.json({ message: "Delete Note route is working." });
};

export {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};