import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/dummyData";

const initialState = {
  users: data,
};

const moveListSlice = createSlice({
  name: "houseUsers",
  initialState,
  reducers: {
    INCREMENT: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload);
      user.room = user.room + 1;
    },
    FLIP: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload);
      const fromIndex = state.users.indexOf(user);
      const element = state.users.splice(fromIndex, 1)[0];

      state.users.splice(0, 0, element);
    },
  },
});

export const { INCREMENT, FLIP } = moveListSlice.actions;

export default moveListSlice.reducer;
