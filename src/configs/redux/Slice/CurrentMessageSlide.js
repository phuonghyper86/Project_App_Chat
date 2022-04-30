import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllListWait } from "configs/firebase/ServiceFirebase/ServiceFind";

const initialState = {
    listChildMessage: [],
    type: 0,
};

export const GetAll = createAsyncThunk("CurrentMessage/getall", async (uid) => {
    return await getAllListWait(uid);
});

export const CurrentMessageSlice = createSlice({
    name: "CurrentMessage",
    initialState,
    reducers: {
        clear: (state) => {
            state.listUser = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(GetAll.pending, (state, action) => {});
        builder.addCase(GetAll.fulfilled, (state, action) => {
            console.log(action.payload);
            state.listUser = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { clear } = CurrentMessageSlice.actions;

export default CurrentMessageSlice.reducer;
