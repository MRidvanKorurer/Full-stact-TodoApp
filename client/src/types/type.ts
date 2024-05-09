export interface IAuth {
    name: string,
    email: string,
    password: string,
}

export interface IAuthRes {
    message: string,
    data: IAuth,
    token?: string | undefined
}