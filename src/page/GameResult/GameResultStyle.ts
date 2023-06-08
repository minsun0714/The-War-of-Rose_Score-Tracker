import styled from "styled-components";
import { StartButtonContainer, StartBtn } from "../MyPage/MyPageStyle";
import { AvatarImg, UserNameWrapper } from "../MyPage/MyPageStyle";
import { UserWrpperProps, GameBoardCellProps } from "./type";
import DialogContent from "@mui/material/DialogContent";

export const GameBoardWrapper = styled.div`
  background-color: #e1d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`;

export const UserWrapper = styled.div<UserWrpperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  font-size: 30px;
  background-image: ${(props) =>
    props.isMyTurn ? "linear-gradient(150deg, white, pink)" : "transparent"};
`;
export const UserName = styled.span`
  margin-left: 15px;
`;

export const ReloadWrapper = styled.div`
  position: absolute;
  margin-left: 20px;
  padding-top: 12px;
`;

export const GetScoreBtnWrapper = styled(StartButtonContainer)`
  margin: 10px;
`;

export const GetScoreBtn = styled(StartBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(200deg, #eec23d, #fbbc05);
  color: black;
  width: 250px;
  :active {
    background-image: linear-gradient(0deg, #fbbc05, #ecf23d);
  }
`;

export const ReloadImg = styled.img``;

export const Crown = styled.img`
  margin: 0 30px 0 -60px;
`;

export const UserImg = styled.img`
  height: 35px;
`;

export const GameBoard = styled.table``;

export const GameBoardRow = styled.tr``;

export const GameBoardCell = styled.td<GameBoardCellProps>`
  padding: 1.5px 12px 1.5px 12px;
  background-image: ${(props) => {
    switch (props.children) {
      case 1:
        return "linear-gradient(200deg, red, red)";
      case 2:
        return "linear-gradient(150deg, white, whitesmoke)";
      default:
        return "linear-gradient(20deg, #955959, #813f3f)";
    }
  }};
  border-radius: 5px;
  color: transparent;
`;

export const ScoreTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  height: 45px;
  margin-top: 10px;
`;

export const ScoreTitle = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  background-color: #955959;
  color: #e1d8d8;
`;

export const ScoreWrapper = styled(UserNameWrapper)`
  display: flex;
  flex-direction: row;
`;

export const UserScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -10px;
`;

export const AvatarImgScore = styled(AvatarImg)`
  height: 40px;
  width: 44px;
`;

export const UserNameModal = styled.span`
  font-size: 14px;
  margin-top: -8px;
`;

export const Score = styled.span`
  font-size: 30px;
  margin-left: 30px;
  margin-top: -8px;
  text-decoration: none;
`;
