import {
  GameTitleContainer,
  GameTitle,
  GoogleLoginContainer,
  GoogleLogoBtn,
  GoogleLoginBtn,
} from "../Home/HomeStyle";

function MyPage() {
  const userName = sessionStorage.getItem("userName");
  return (
    <>
      <GameTitleContainer>
        <GameTitle>{userName}님</GameTitle>
        <GameTitle>Enjoy Your Day</GameTitle>
      </GameTitleContainer>
      <GoogleLoginContainer></GoogleLoginContainer>
    </>
  );
}
export default MyPage;
