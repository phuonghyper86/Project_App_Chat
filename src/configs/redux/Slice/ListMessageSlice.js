import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllListFriend } from "configs/firebase/ServiceFirebase/ServiceFind";

const initialState = {
    listMessage: [],
};

export const GetListMessage = createAsyncThunk(
    "ListMessage/getAllMessage",
    async (uid) => {
        return await getAllListFriend(uid);
    }
);

export const MessageSlice = createSlice({
    name: "ListMessage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetListMessage.pending, (state, action) => {});
        builder.addCase(GetListMessage.fulfilled, (state, action) => {
            state.listMessage = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
// export const {} = AllFriendSlice.actions;

export default MessageSlice.reducer;
