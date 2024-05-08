import { NextFunction, Request, Response } from "express";
import Auth from "../models/auth";
import { IAuth } from "../types/type";
import APIError from "../utils/error";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import randomAvatar from "../utils/randomAvatar";
import IResponse from "../utils/response";


export const register = async (req: Request, res: Response, next: NextFunction) => {
    const {name, email, password} = req.body as IAuth;

    try {
        const user: IAuth | null = await Auth.findOne({email});

        if(user) {
            next(new APIError("Email adresi zaten kayıtlı", 401));
        }

        const hashPassword: string = await bcrypt.hash(password, 10);

        const defaultAvatar = randomAvatar();

        const newUser = await Auth.create({name, email, password: hashPassword, avatar: defaultAvatar});

        const token: string = jwt.sign({sub: newUser._id, name: newUser.name}, process.env.JWT_KEY || "", {
            expiresIn: "7d",
            algorithm: "HS512"
        });

        return new IResponse("Kayıt işlemi başarılı", newUser, token).created(res);

    } catch (error) {
        throw new APIError("Kayıt İşlemi Başarısız", 400);
    }
}