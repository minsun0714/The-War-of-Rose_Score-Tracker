import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { GameTitleContainer, GameTitle } from "../Home/HomeStyle";
import {
  Modal,
  WriteYourNameWrapper,
  WriteYourNames,
  UserNameWrapper,
  UserNameInput,
  AvatarImg,
  ActionsWrapper,
  ActionBtn,
  StartButtonContainer,
  LogoutButtonContainer,
  StartBtn,
  GoogleLogoutBtn,
} from "./MyPageStyle";

import { GameResultImgURL } from "../../common/type/enum";
import { addUserName1, addUserName2 } from "../../store/usernameStore";

function MyPage() {
  const userName = sessionStorage.getItem("userName");
  const navigate = useNavigate();

  const handleGoogleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
        sessionStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const onChangeUserName1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    dispatch(addUserName1({ userName1: newName }));
  };
  const onChangeUserName2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    dispatch(addUserName2({ userName2: newName }));
  };

  const handleGetScore = () => {
    navigate("/score");
  };

  return (
    <>
      <GameTitleContainer>
        <GameTitle>{userName}님</GameTitle>
        <GameTitle>Enjoy Your Day</GameTitle>
      </GameTitleContainer>

      <StartButtonContainer>
        <StartBtn onClick={handleOpen}>Get Score</StartBtn>
      </StartButtonContainer>

      <Modal open={open} onClose={handleClose}>
        <WriteYourNameWrapper>
          <WriteYourNames>Write your names</WriteYourNames>
        </WriteYourNameWrapper>
        <UserNameWrapper>
          <AvatarImg src={GameResultImgURL.user1}></AvatarImg>
          <UserNameInput
            label='user1'
            variant='standard'
            onChange={onChangeUserName1}
          />
        </UserNameWrapper>
        <UserNameWrapper>
          <AvatarImg src={GameResultImgURL.user2}></AvatarImg>
          <UserNameInput
            label='user2'
            variant='standard'
            onChange={onChangeUserName2}
          />
        </UserNameWrapper>
        <ActionsWrapper>
          <ActionBtn onClick={handleClose}>Cancel</ActionBtn>
          <ActionBtn onClick={handleGetScore}>Start</ActionBtn>
        </ActionsWrapper>
      </Modal>

      <LogoutButtonContainer>
        <GoogleLogoutBtn onClick={handleGoogleLogout}>log out</GoogleLogoutBtn>
      </LogoutButtonContainer>
    </>
  );
}
export default MyPage;
