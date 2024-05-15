import Task from "../models/task";
import {Request, Response} from "express";
import APIError from "../utils/error";
import IResponse from "../utils/response";
import { ITask } from "../types/type";

export const getAllTask = async (req: Request, res: Response) => {
    try {
        const tasks: any  = await Task.find().populate("user", "name email avatar -_id");

        return new IResponse("İşlem Başarılı", tasks).success(res);
    } catch (error) {
        throw new APIError("İşlem Başarısız", 400);
    }
}


export const createTask = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.create(req.body);

        return new IResponse("Create İşlemi Başarılı", tasks).created(res);
    } catch (error) {
        throw new APIError("İşlem Başarısız", 400);
    }
}


export const deleteTask = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);

        return new IResponse("Silme İşlemi Başarılı", task).success(res);
    } catch (error) {
        throw new APIError("Silme İşlemi Başarısız",400);
    }
}


export const updateTask = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const task = await Task.findByIdAndUpdate(id, req.body, {new: true});

        return new IResponse("Güncellem İşlemi Başarılı", task).success(res);
    } catch (error) {
        throw new APIError("Güncelleme İşlemi Başarısız", 400);
    }
}
