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

function GameResult() {
  return (
    <>
      <ReloadWrapper>
        <ReloadImg src={GameResultImgURL.reloadImg}></ReloadImg>
      </ReloadWrapper>
      <User src={GameResultImgURL.user1} userNumber={1} />
      <GameBoardContainer />
      <User src={GameResultImgURL.user2} userNumber={2} />
      <GetScoreBtnWrapper>
        <GetScoreBtn>{GET_SCORE_BUTTON_PHRASE}</GetScoreBtn>
      </GetScoreBtnWrapper>
    </>
  );
}
export default GameResult;
