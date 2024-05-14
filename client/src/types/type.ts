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