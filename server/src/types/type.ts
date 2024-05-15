import {Document} from "mongoose";

export interface IAuth extends Document {
    name: string,
    email: string,
    password: string,
    avatar: string
}



export interface ITask extends Document {
    user: IAuth,
    title: string,
    description: string,
    image: string
}



