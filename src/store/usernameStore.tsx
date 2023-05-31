import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type UserName = {
  userName1?: string;
  userName2?: string;
};

const initialUserNameState: UserName = {
  userName1: undefined,
  userName2: undefined,
};

export const username = createSlice({
  name: "userNameReducer",
  initialState: initialUserNameState,
  reducers: {
    addUserName1: (state: UserName, action: PayloadAction<UserName>) => {
      return { ...state, userName1: action.payload.userName1 };
    },
    addUserName2: (state: UserName, action: PayloadAction<UserName>) => {
      return { ...state, userName2: action.payload.userName2 };
    },
  },
});

export const usernameStore = configureStore({ reducer: username.reducer });
export const { addUserName1, addUserName2 } = username.actions;
