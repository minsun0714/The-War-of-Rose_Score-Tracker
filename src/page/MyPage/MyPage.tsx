import { GameTitleContainer, GameTitle } from "../Home/HomeStyle";
import {
  StartButtonContainer,
  LogoutButtonContainer,
  StartBtn,
  GoogleLogoutBtn,
} from "./MyPageStyle";

function MyPage() {
  const userName = sessionStorage.getItem("userName");
  return (
    <>
      <GameTitleContainer>
        <GameTitle>{userName}님</GameTitle>
        <GameTitle>Enjoy Your Day</GameTitle>
      </GameTitleContainer>
      <StartButtonContainer>
        <StartBtn>Get Score</StartBtn>
      </StartButtonContainer>
      <LogoutButtonContainer>
        <GoogleLogoutBtn>log out</GoogleLogoutBtn>
      </LogoutButtonContainer>
    </>
  );
}
export default MyPage;
