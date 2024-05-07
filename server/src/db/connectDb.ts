import mongoose from "mongoose";


const conn = async () => {
    try {
        await mongoose.connect(process.env.DB_URI || "");
        console.log("Database connection success");
    } catch (error) {
        console.log("Db Error!", error);
    }
}


export default conn;