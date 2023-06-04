import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userNames } from "./usernameStore";
import { tapTurn } from "./TapTurnStore";

const rootReducer = combineReducers({
  userNames: userNames.reducer,
  tapTurnStore: tapTurn.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
