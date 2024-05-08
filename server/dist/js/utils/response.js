"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IResponse {
    constructor(message = null, data = null, token) {
        this.message = message;
        this.data = data;
        this.token = token;
    }
    success(res) {
        return res.status(200).json({
            message: "İşlem Başarılı",
            data: this.data,
            token: this.token
        });
    }
    created(res) {
        return res.status(201).json({
            message: "Create İşlemi Başarılı",
            data: this.data,
            token: this.token
        });
    }
}
exports.default = IResponse;
