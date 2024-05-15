import { Response } from "express";
import {IAuth, ITask} from "../types/type";

class IResponse {
    message: string | null;
    data: IAuth | ITask | null
    token?: string 

    constructor(message: string | null = null, data: IAuth | ITask | null = null, token?: string) {
        this.message = message;
        this.data = data
        this.token = token
    }


    success(res: Response) {
        return res.status(200).json({
            message: this.message ??  "İşlem Başarılı",
            data: this.data,
            token: this.token
        })
    }


    created(res: Response) {
        return res.status(201).json({
            message: this.message ?? "Create İşlemi Başarılı",
            data: this.data,
            token: this.token
        })
    }
}


export default IResponse;