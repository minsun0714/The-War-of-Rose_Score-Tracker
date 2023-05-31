import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { GameTitleContainer, GameTitle } from "../Home/HomeStyle";
import {
  StartButtonContainer,
  LogoutButtonContainer,
  StartBtn,
  GoogleLogoutBtn,
} from "./MyPageStyle";

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
        <StartBtn onClick={handleGetScore}>Get Score</StartBtn>
      </StartButtonContainer>
      <LogoutButtonContainer>
        <GoogleLogoutBtn onClick={handleGoogleLogout}>log out</GoogleLogoutBtn>
      </LogoutButtonContainer>
    </>
  );
}
export default MyPage;
