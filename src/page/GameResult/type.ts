import { GameResultImgURL } from "../../common/type/enum";

export type UserImg = GameResultImgURL.user1 | GameResultImgURL.user2;

export type UserProp = {
  src: UserImg;
  userName: string;
};
