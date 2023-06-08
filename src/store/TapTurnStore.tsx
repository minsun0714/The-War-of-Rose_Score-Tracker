import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type TapTurn = { tapTurn: number };

const initialGameTurnState: TapTurn = { tapTurn: 1 };

export const tapTurn = createSlice({
  name: "tapTurnReducer",
  initialState: initialGameTurnState,
  reducers: {
    getWhoseTurnItIs: (state: TapTurn, action: PayloadAction<TapTurn>) => {
      return action.payload.tapTurn === 1 ? { tapTurn: 1 } : { tapTurn: 2 };
    },
  },
});

export const tapTurnStore = configureStore({ reducer: tapTurn.reducer });
export const { getWhoseTurnItIs } = tapTurn.actions;
