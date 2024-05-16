export interface IAuth {
    name: string,
    email: string,
    password: string,
    avatar: string,
    createdAt?: string
}

export interface IAuthRes {
    message: string,
    data: IAuth,
    token?: string | undefined
}


export interface ITask {
    _id?: string,
    title: string,
    description: string,
    image: string,
    createdAt: string,
    user: IAuth
}


export interface ITaskRes {
    message: string,
    data: ITask[]
}