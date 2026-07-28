import express from "express";
import morgan from "morgan";
//routes
import authRoutes from "./routes/auth.routes.js"
import noteRoutes from "./routes/note.routes.js"
const app = express();


app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);


export default app;