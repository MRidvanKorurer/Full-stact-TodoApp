import {PayloadAction, createSlice} from "@reduxjs/toolkit";


interface IInitialState {
    token: any,
    isAuth: boolean
}

const initialState: IInitialState = {
    token: "",
    isAuth: false,
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
    }
});

export const {createToken, getToken, isAuthFalse, isAuthTrue} = authSlice.actions;
export const authReducer = authSlice.reducer;