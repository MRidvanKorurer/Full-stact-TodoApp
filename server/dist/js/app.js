"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectDb_1 = __importDefault(require("./db/connectDb"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routing
// error
app.use(errorHandler_1.default);
app.listen(port, () => {
    (0, connectDb_1.default)();
    console.log(`Server is running on port: ${port}`);
});
