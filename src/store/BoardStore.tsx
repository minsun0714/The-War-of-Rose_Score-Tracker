import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type GameBoard = number[][];

type GameBoardPayload = {
  currentUser: number;
  rowIdx: number;
  columnIdx: number;
};

const initialGameBoardState: GameBoard = [...Array(9)].map((_) =>
  [...Array(9)].map((_) => 0)
);

export const GameBoard = createSlice({
  name: "GameBoardReducer",
  initialState: initialGameBoardState,
  reducers: {
    getGameBoard: (
      state: GameBoard,
      action: PayloadAction<GameBoardPayload>
    ) => {
      const [i, j] = [action.payload.rowIdx, action.payload.columnIdx];
      if (state[i][j] === 0) {
        state[i][j] = action.payload.currentUser;
      } else {
        state[i][j] = 0;
      }
    },
  },
});

export const gameBoardStore = configureStore({ reducer: GameBoard.reducer });
export const { getGameBoard } = GameBoard.actions;
