import mongoose from "mongoose";
import { ITask } from "../types/type";


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth"
    }
}, {timestamps: true});


export default mongoose.model<ITask>("Task", taskSchema);