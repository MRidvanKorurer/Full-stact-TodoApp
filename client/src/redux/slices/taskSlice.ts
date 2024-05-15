import {createSlice} from "@reduxjs/toolkit";


interface IInitialState {

}

const initialState: IInitialState = {

}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {

    }
});


export const {} = taskSlice.actions;
export const taskReducer = taskSlice.reducer;