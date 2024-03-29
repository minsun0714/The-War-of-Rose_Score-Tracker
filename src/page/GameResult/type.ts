import { GameResultImgURL } from "../../common/type/enum";

export type UserImg = GameResultImgURL.user1 | GameResultImgURL.user2;

type UserNumber = 1 | 2;

export type UserProp = {
  userNumber: UserNumber;
  src: UserImg;
  userName?: string;
};

export type UserWrpperProps = {
  onClick: () => void;
  isMyTurn: boolean;
};

export type GameBoardCellProps = {
  key: string;
  onClick: () => void;
};
