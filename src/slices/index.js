import { createSlice } from "@reduxjs/toolkit";
import pizzas from "../pizzas";

const initialState = {
    pizzas,
    orders:[]
};

export const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers: {
        addOrder:(state, {payload})=>{

        }
    }
})

//export const {} = dataSlice.actions;

export default dataSlice.reducer;