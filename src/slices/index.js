const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    todos:[

    ]
};

const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers: {
        //Action à rajouter ici
    }
})

//export const {} = dataSlice.actions;

export default dataSlice.reducer;