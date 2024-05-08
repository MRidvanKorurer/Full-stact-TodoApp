import {Request, Response, NextFunction} from "express";
import APIError from "../utils/error";

const errorHandlerMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof APIError) {
        return res.status(err.statusCode || 400).json({
            message: err.message ?? "İşlem Başarısız"
        })
    }

    next();

    return res.status(500).json({
        message: "Api'nizde bir hata meydana geldi lütfen kontrol edin!"
    })
}

export default errorHandlerMiddleware;