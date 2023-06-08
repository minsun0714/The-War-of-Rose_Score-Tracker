import cloneDeep from "lodash/cloneDeep";

export const useGetScore = (
  table: number[][]
): { user1: number; user2: number } => {
  const deepCopiedTable = cloneDeep(table);

  let score1 = 0;
  let score2 = 0;

  const getUsersScoreByDFS = (i: number, j: number, userNumber?: number) => {
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

    getUsersScoreByDFS(i - 1, j, userNumber);
    getUsersScoreByDFS(i + 1, j, userNumber);
    getUsersScoreByDFS(i, j - 1, userNumber);
    getUsersScoreByDFS(i, j + 1, userNumber);

    return [score1, score2];
  };
  const finalScore = { user1: 0, user2: 0 };

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const result = getUsersScoreByDFS(i, j);
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

  return finalScore;
};
