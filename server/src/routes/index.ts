import express, {Router} from "express";
import authRoute from "./auth";
import taskRoute from "./task";


const router: Router = express.Router();

router.use("/auth", authRoute);

router.use("/tasks", taskRoute);

export default router;