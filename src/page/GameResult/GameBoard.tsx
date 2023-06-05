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
import cloneDeep from "lodash/cloneDeep";

function GameBoardContainer() {
  const dispatch = useDispatch();
  const table = useSelector((store: RootState) => store.gameBoardStore);
  const tapTurn = useSelector((store: RootState) => store.tapTurnStore.tapTurn);

  const onClick = (rowIdx: number, columnIdx: number) => {
    dispatch(getGameBoard({ currentUser: tapTurn, rowIdx, columnIdx }));
  };

  const deepCopiedTable = cloneDeep(table);
  console.log("table", table);
  console.log("deepCopiedTable", deepCopiedTable);

  let score1 = 0;
  let score2 = 0;

  const dfs = (i: number, j: number, userNumber?: number) => {
    if (i < 0 || i >= 9 || j < 0 || j >= 9) return false;
    if (deepCopiedTable[i][j] === 0) return false;
    if (userNumber && deepCopiedTable[i][j] !== userNumber) return false;

    if (deepCopiedTable[i][j] === 1) {
      score1 += 1;
    } else {
      score2 += 1;
    }

    if (!userNumber && deepCopiedTable[i][j] === 1) {
      userNumber = 1;
    } else if (!userNumber && deepCopiedTable[i][j] === 2) {
      userNumber = 2;
    }

    deepCopiedTable[i][j] = 0;

    dfs(i - 1, j, userNumber);
    dfs(i + 1, j, userNumber);
    dfs(i, j - 1, userNumber);
    dfs(i, j + 1, userNumber);

    return [score1, score2];
  };
  const finalScore = { user1: 0, user2: 0 };

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const result = dfs(i, j);
      if (result) {
        console.log(i, j, result);
        let [score1, score2] = result;
        finalScore.user1 += score1 ** 2;
        finalScore.user2 += score2 ** 2;
      }
      score1 = 0;
      score2 = 0;
    }
  }

  console.log("finalScore", finalScore);

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
