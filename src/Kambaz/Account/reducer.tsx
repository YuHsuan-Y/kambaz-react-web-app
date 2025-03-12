import {createSlice} from "@reduxjs/toolkit";
/* account reducer keep track current signed in user */
const initialState = {
    currentUser: null,
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers:{
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export const {setCurrentUser} = accountSlice.actions;
export default accountSlice.reducer;