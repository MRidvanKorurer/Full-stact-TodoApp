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
exports.me = exports.login = exports.register = void 0;
const auth_1 = __importDefault(require("../models/auth"));
const error_1 = __importDefault(require("../utils/error"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const randomAvatar_1 = __importDefault(require("../utils/randomAvatar"));
const response_1 = __importDefault(require("../utils/response"));
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const user = yield auth_1.default.findOne({ email });
        if (user) {
            return next(new error_1.default("Email adresi zaten kayıtlı", 401));
        }
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        const defaultAvatar = (0, randomAvatar_1.default)();
        const newUser = yield auth_1.default.create({ name, email, password: hashPassword, avatar: defaultAvatar });
        const token = jsonwebtoken_1.default.sign({ sub: newUser._id, name: newUser.name }, process.env.JWT_KEY || "", {
            expiresIn: "7d",
            algorithm: "HS512"
        });
        return new response_1.default("Kayıt işlemi başarılı", newUser, token).created(res);
    }
    catch (error) {
        throw new error_1.default("Kayıt İşlemi Başarısız", 400);
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield auth_1.default.findOne({ email });
        if (!user) {
            return next(new error_1.default("Email adresi hatalı", 401));
        }
        let comparePassword;
        if (user) {
            comparePassword = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
        }
        if (!comparePassword) {
            return next(new error_1.default("Şifre hatalıa", 401));
        }
        const token = jsonwebtoken_1.default.sign({ sub: user === null || user === void 0 ? void 0 : user._id, name: user === null || user === void 0 ? void 0 : user.name }, process.env.JWT_KEY || "", {
            expiresIn: "7d",
            algorithm: "HS512"
        });
        return new response_1.default("Giriş işlemi başarılı", user, token).success(res);
    }
    catch (error) {
        throw new error_1.default("Giriş işlemi başarısız", 400);
    }
});
exports.login = login;
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        return new response_1.default("İşlem Başarılı, Yetkilisiniz", user).success(res);
    }
    catch (error) {
        throw new error_1.default("Yetki hatası, lütfen login olun", 401);
    }
});
exports.me = me;
