import {
  GameBoardWrapper,
  GameBoardCell,
  GameBoard,
  GameBoardRow,
} from "./GameResultStyle";
import { GameResultStyle } from "../../common/style/style";

function GameBoardContainer() {
  const table = [...Array(9)].map((_) => [...Array(9)].map((_) => 0));
  return (
    <GameBoardWrapper>
      <GameResultStyle />
      <GameBoard>
        {table.map((row: number[], rowIdx: number) => {
          return (
            <tbody key={rowIdx}>
              <GameBoardRow>
                {row.map((element: number, elementIdx: number) => (
                  <GameBoardCell key={elementIdx}>0</GameBoardCell>
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
