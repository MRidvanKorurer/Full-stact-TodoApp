import express, {Router} from "express";
import { createTask, deleteTask, getAllTask, updateTask } from "../controllers/task";


const router = express.Router();

router.get("/all-task", getAllTask);

router.post("/create-task", createTask);

router.put("/update-task/:id", updateTask);

router.delete("/delete-task/:id", deleteTask);

export default router;