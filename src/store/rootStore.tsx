import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userNames } from "./usernameStore";
import { tapTurn } from "./TapTurnStore";
import { GameBoard } from "./BoardStore";

const rootReducer = combineReducers({
  userNames: userNames.reducer,
  tapTurnStore: tapTurn.reducer,
  gameBoardStore: GameBoard.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
