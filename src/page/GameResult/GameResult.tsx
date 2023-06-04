import { GetScoreBtnWrapper, GetScoreBtn } from "./GameResultStyle";
import { GameResultImgURL } from "../../common/type/enum";
import GameBoardContainer from "./GameBoard";
import User from "./GameUser";
import { GET_SCORE_BUTTON_PHRASE } from "../../common/constant";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootStore";

function GameResult() {
  const userNames = useSelector((store: RootState) => store.userNames);
  console.log(userNames);
  return (
    <>
      <User
        userNumber={1}
        src={GameResultImgURL.user1}
        userName={userNames.userName1}
      />
      <GameBoardContainer />
      <User
        userNumber={2}
        src={GameResultImgURL.user2}
        userName={userNames.userName2}
      />
      <GetScoreBtnWrapper>
        <GetScoreBtn>{GET_SCORE_BUTTON_PHRASE}</GetScoreBtn>
      </GetScoreBtnWrapper>
    </>
  );
}
export default GameResult;
