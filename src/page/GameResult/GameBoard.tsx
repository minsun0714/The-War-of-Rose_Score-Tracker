import {
  GameBoardWrapper,
  GameBoardCell,
  GameBoard,
  GameBoardRow,
} from "./GameResultStyle";
import { GameResultStyle } from "../../common/style/style";
import { useDispatch, useSelector } from "react-redux";
import { getGameBoard } from "../../store/BoardStore";
import { RootState } from "../../store/rootStore";
import { useGetScore } from "../../common/customHooks/useGetScore";

function GameBoardContainer() {
  const dispatch = useDispatch();
  const table = useSelector((store: RootState) => store.gameBoardStore);
  const tapTurn = useSelector((store: RootState) => store.tapTurnStore.tapTurn);

  const onClick = (rowIdx: number, columnIdx: number) => {
    dispatch(getGameBoard({ currentUser: tapTurn, rowIdx, columnIdx }));
  };

  const finalScore = useGetScore(table);

  return (
    <GameBoardWrapper>
      <GameResultStyle />
      <GameBoard>
        {table.map((row: number[], rowIdx: number) => {
          return (
            <tbody key={rowIdx}>
              <GameBoardRow>
                {row.map((element: number, columnIdx: number) => (
                  <GameBoardCell
                    key={rowIdx + "" + columnIdx}
                    onClick={() => onClick(rowIdx, columnIdx)}
                  >
                    {element}
                  </GameBoardCell>
                ))}
              </GameBoardRow>
            </tbody>
          );
        })}
      </GameBoard>
    </GameBoardWrapper>
  );
}
export default GameBoardContainer;
