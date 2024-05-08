import mongoose from "mongoose";
import { IAuth } from "../types/type";


const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
}, {timestamps: true});

export default mongoose.model<IAuth>("Auth", authSchema);