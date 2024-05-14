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
        password: ""
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
        state.user.name = actions.payload.name;
        state.user.email = actions.payload.email;
        state.user.password = actions.payload.password;
        localStorage.setItem("user", JSON.stringify(state.user));
       },
    }
});

export const {createToken, getToken, isAuthFalse, isAuthTrue, saveUser} = authSlice.actions;
export const authReducer = authSlice.reducer;