import {
  ReloadWrapper,
  GetScoreBtnWrapper,
  GetScoreBtn,
  ReloadImg,
} from "./GameResultStyle";
import { GameResultImgURL } from "../../common/type/enum";
import GameBoardContainer from "./GameBoard";
import User from "./GameUser";
import { GET_SCORE_BUTTON_PHRASE } from "../../common/constant";
import { useSelector } from "react-redux";

function GameResult() {
  const userNames = useSelector(
    (store: { userName1: string; userName2: string }) => store
  );
  return (
    <>
      <ReloadWrapper>
        <ReloadImg src={GameResultImgURL.reloadImg}></ReloadImg>
      </ReloadWrapper>
      <User src={GameResultImgURL.user1} userName={userNames.userName1} />
      <GameBoardContainer />
      <User src={GameResultImgURL.user2} userName={userNames.userName2} />
      <GetScoreBtnWrapper>
        <GetScoreBtn>{GET_SCORE_BUTTON_PHRASE}</GetScoreBtn>
      </GetScoreBtnWrapper>
    </>
  );
}
export default GameResult;
