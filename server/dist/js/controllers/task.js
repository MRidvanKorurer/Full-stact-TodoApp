"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.createTask = exports.getAllTask = void 0;
const task_1 = __importDefault(require("../models/task"));
const error_1 = __importDefault(require("../utils/error"));
const response_1 = __importDefault(require("../utils/response"));
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_1.default.find().populate("user", "name email avatar -_id");
        return new response_1.default("İşlem Başarılı", tasks).success(res);
    }
    catch (error) {
        throw new error_1.default("İşlem Başarısız", 400);
    }
});
exports.getAllTask = getAllTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_1.default.create(req.body);
        return new response_1.default("Create İşlemi Başarılı", tasks).created(res);
    }
    catch (error) {
        throw new error_1.default("İşlem Başarısız", 400);
    }
});
exports.createTask = createTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const task = yield task_1.default.findByIdAndDelete(id);
        return new response_1.default("Silme İşlemi Başarılı", task).success(res);
    }
    catch (error) {
        throw new error_1.default("Silme İşlemi Başarısız", 400);
    }
});
exports.deleteTask = deleteTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const task = yield task_1.default.findByIdAndUpdate(id, req.body, { new: true });
        return new response_1.default("Güncellem İşlemi Başarılı", task).success(res);
    }
    catch (error) {
        throw new error_1.default("Güncelleme İşlemi Başarısız", 400);
    }
});
exports.updateTask = updateTask;
