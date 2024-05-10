import "express-async-errors";
import express, {Express} from "express";
import cors from "cors";
import dotenv from "dotenv";
import conn from "./db/connectDb";
import errorHandlerMiddleware from "./middlewares/errorHandler";
import indexRoute from "./routes/index";
import cookieParser from "cookie-parser";


dotenv.config();


const app: Express = express();
const port: string | number = process.env.PORT || 4000;


// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// routing
app.use("/api", indexRoute);


// error
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    conn();
    console.log(`Server is running on port: ${port}`);
})