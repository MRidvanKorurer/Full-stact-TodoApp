import { NextFunction, Request, Response } from "express";
import APIError from "../utils/error";
import Auth from "../models/auth";
import jwt from "jsonwebtoken";

const authMiddleware = async (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    try {
        if(!token) {
            return next(new APIError("Lütfen giriş yapın", 401));
        }

        jwt.verify(token, process.env.JWT_KEY || "", async(err: any, decoded: any) => {
            if(err) {
                return next(new APIError("Token hatası", 401));
            }

            const user = await Auth.findById(decoded.sub);

            req.user = user;

            next();
        });


    } catch (error) {
        throw new APIError("Yekilendirme hatası", 401);
    }
}


export default authMiddleware;