import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { IAuth } from "../../types/type";


interface IInitialState {
    token: any,
    isAuth: boolean,
    user: IAuth
}

const initialState: IInitialState = {
    token: "",
    isAuth: false,
    user: {
        name: "",
        email: "",
        password: "",
        avatar: ""
    }
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
       getToken: (state) => {
            const token = localStorage.getItem("token");
            state.token = token;
       },
       createToken: (state, actions: PayloadAction<string | undefined>) => {
            state.token = JSON.stringify(localStorage.setItem("token", JSON.stringify(actions.payload)));
       },
       isAuthTrue: (state) => {
        state.isAuth = true;
       },
       isAuthFalse: (state) => {
        state.isAuth = false;
       },
       saveUser: (state, actions: PayloadAction<IAuth>) => {
        localStorage.setItem("user", JSON.stringify(actions.payload));
       },
       getUser: (state) => {
        if(localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem("user"));

            state.user.name = user.name;
            state.user.email = user.email;
            state.user.password = user.password;
            state.user.avatar = user.avatar;
            
            state.isAuth = true;
        }
       },
       logout: (state) => {
        localStorage.removeItem("user");
        state.isAuth = false
       }
    }
});

export const {createToken, getToken, isAuthFalse, isAuthTrue, saveUser, getUser, logout} = authSlice.actions;
export const authReducer = authSlice.reducer;