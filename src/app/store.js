

import { createSlice } from "@reduxjs/toolkit";
import pizzas from '../pizzas';

const initialState = {
    pizzas,
     orders:[]  //JSON.parse(localStorage.getItem('orders')) 
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addOrder: (state, { payload }) => {
            const order = {
                id: payload,
                pizzas: {},
                total: 0,
                paid: false
            }
            // Mise à jour du localStorage
            // localStorage.setItem('orders', JSON.stringify([...state.orders, order]));
            // Mise à jour du state global
            state.orders.push(order);
        },
       
    }
});

export const { addOrder } = dataSlice.actions;

export default dataSlice.reducer;