import styled from "styled-components";
import {
  GameTitleContainer,
  GameTitle,
  GoogleLoginContainer,
  GoogleLogoBtn,
  GoogleLoginBtn,
} from "./HomeStyle";

function Home() {
  return (
    <>
      <GameTitleContainer>
        <GameTitle>The War of Rose</GameTitle>
        <GameTitle>: Score Tracker</GameTitle>
      </GameTitleContainer>
      <GoogleLoginContainer>
        <GoogleLogoBtn></GoogleLogoBtn>
        <GoogleLoginBtn>Google Login</GoogleLoginBtn>
      </GoogleLoginContainer>
    </>
  );
}
export default Home;
