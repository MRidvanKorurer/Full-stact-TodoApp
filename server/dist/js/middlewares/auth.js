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
const error_1 = __importDefault(require("../utils/error"));
const auth_1 = __importDefault(require("../models/auth"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    try {
        if (!token) {
            return next(new error_1.default("Lütfen giriş yapın", 401));
        }
        jsonwebtoken_1.default.verify(token, process.env.JWT_KEY || "", (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                return next(new error_1.default("Token hatası", 401));
            }
            const user = yield auth_1.default.findById(decoded.sub);
            req.user = user;
            next();
        }));
    }
    catch (error) {
        throw new error_1.default("Yekilendirme hatası", 401);
    }
});
exports.default = authMiddleware;
