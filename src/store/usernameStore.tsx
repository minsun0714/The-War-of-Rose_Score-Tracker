import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type UserName = {
  userName1?: string;
  userName2?: string;
};

const initialUserNameState: UserName = {
  userName1: "user1",
  userName2: "user2",
};

export const userNames = createSlice({
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

export const userNameStore = configureStore({ reducer: userNames.reducer });
export const { addUserName1, addUserName2 } = userNames.actions;
