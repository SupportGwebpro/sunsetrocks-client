import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface GuestState {
  name: string;
}

const initialState: GuestState = {
  name: "",
};

export const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearName: (state) => {
      state.name = "";
    },
  },
});

export const { setName, clearName } = guestSlice.actions;
export default guestSlice.reducer;
