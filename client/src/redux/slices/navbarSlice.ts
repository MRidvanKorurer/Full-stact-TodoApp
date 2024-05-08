import {createSlice} from "@reduxjs/toolkit";


interface IInitialState {
    sideBar: boolean,
    operations: boolean
}

const initialState: IInitialState = {
    sideBar: false,
    operations: false
}


const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        sideBarTrue: (state) => {
            state.sideBar = true;
        },
        sideBarFalse: (state) => {
            state.sideBar = false;
        },
        operationTrue: (state) => {
            state.operations = true;
        },
        operationFalse: (state) => {
            state.operations = false;
        }
    }
});


export const {sideBarTrue, sideBarFalse, operationFalse, operationTrue} = navbarSlice.actions;
export const navbarReducer = navbarSlice.reducer;