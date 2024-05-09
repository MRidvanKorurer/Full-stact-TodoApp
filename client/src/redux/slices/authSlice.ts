import {PayloadAction, createSlice} from "@reduxjs/toolkit";


interface IInitialState {
    token: string,
    isAuth: boolean
}

const initialState: IInitialState = {
    token: "",
    isAuth: true,
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
       getToken: (state) => {
            const token = (localStorage.getItem("token"));

            if(token) {
                state.token = JSON.stringify(localStorage.getItem("token"));
            }
       },
       createToken: (state, actions: PayloadAction<string | undefined>) => {
            const token = JSON.stringify(localStorage.setItem("token", JSON.stringify(actions.payload)));

            if(token) {
                state.token = token;
            }
       },
       isAuthTrue: (state) => {
        state.isAuth = true;
       },
       isAuthFalse: (state) => {
        state.isAuth = false;
       }
    }
});


export const {createToken, getToken, isAuthFalse, isAuthTrue} = authSlice.actions;
export const authReducer = authSlice.reducer;