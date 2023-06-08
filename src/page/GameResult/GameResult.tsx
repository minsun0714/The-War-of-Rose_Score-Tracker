import { useState } from "react";
import { GetScoreBtnWrapper, GetScoreBtn } from "./GameResultStyle";
import { RootState } from "../../store/rootStore";
import { GameResultImgURL } from "../../common/type/enum";
import GameBoardContainer from "./GameBoard";
import User from "./GameUser";
import { GET_SCORE_BUTTON_PHRASE } from "../../common/constant";
import { useSelector } from "react-redux";
import { useGetScore } from "../../common/customHooks/useGetScore";
import {
  ScoreTitleWrapper,
  ScoreTitle,
  ScoreWrapper,
  AvatarImgScore,
  UserScoreWrapper,
  UserNameModal,
  Score,
} from "./GameResultStyle";
import { Modal, ActionsWrapper, ActionBtn } from "../MyPage/MyPageStyle";

function GameResult() {
  const userNames = useSelector((store: RootState) => store.userNames);
  const table = useSelector((store: RootState) => store.gameBoardStore);
  const finalScore = useGetScore(table);
  const onClickShowResult = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
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
        <GetScoreBtn onClick={onClickShowResult}>
          {GET_SCORE_BUTTON_PHRASE}
        </GetScoreBtn>
      </GetScoreBtnWrapper>

      <Modal open={open} onClose={handleClose}>
        <ScoreTitleWrapper>
          <ScoreTitle>Final Score</ScoreTitle>
        </ScoreTitleWrapper>
        <ScoreWrapper>
          <AvatarImgScore src={GameResultImgURL.user1}></AvatarImgScore>
          <UserScoreWrapper>
            <UserNameModal>{userNames.userName1}</UserNameModal>
            <Score>{finalScore.user1}</Score>
          </UserScoreWrapper>
        </ScoreWrapper>
        <ScoreWrapper>
          <AvatarImgScore src={GameResultImgURL.user2}></AvatarImgScore>
          <UserScoreWrapper>
            <UserNameModal>{userNames.userName2}</UserNameModal>
            <Score>{finalScore.user2}</Score>
          </UserScoreWrapper>
        </ScoreWrapper>
        <ActionsWrapper>
          <ActionBtn onClick={handleClose}>ok</ActionBtn>
        </ActionsWrapper>
      </Modal>
    </>
  );
}
export default GameResult;
