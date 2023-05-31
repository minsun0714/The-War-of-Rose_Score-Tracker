import {
  GameBoardWrapper,
  GameBoardElement,
  GameBoard,
  GameCell,
} from "./GameResultStyle";
import { GameResultStyle } from "../../common/style/style";

function GameBoardContainer() {
  const table = [...Array(9)].map((_) => [...Array(9)].map((_) => 0));
  return (
    <GameBoardWrapper>
      <GameResultStyle />
      <GameBoard>
        {table.map((row: number[]) => {
          return (
            <GameCell>
              {row.map((element: number) => (
                <GameBoardElement>0</GameBoardElement>
              ))}
            </GameCell>
          );
        })}
      </GameBoard>
    </GameBoardWrapper>
  );
}
export default GameBoardContainer;
