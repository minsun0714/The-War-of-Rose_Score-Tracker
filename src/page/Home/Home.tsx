import styled from "styled-components";
import {
  GameTitleContainer,
  GameTitle,
  GoogleLoginContainer,
  GoogleLogoBtn,
  GoogleLoginBtn,
} from "./HomeStyle";
import app from "../../service/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Initialize Firebase Authentication and get a reference to the service

function Home() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;

          // The signed-in user info.
          const user = result.user;
          navigate("/mypage");
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  return (
    <>
      <GameTitleContainer>
        <GameTitle>The War of Rose</GameTitle>
        <GameTitle>Score Tracker</GameTitle>
      </GameTitleContainer>
      <GoogleLoginContainer onClick={handleGoogleLogin}>
        <GoogleLogoBtn></GoogleLogoBtn>
        <GoogleLoginBtn>Google Login</GoogleLoginBtn>
      </GoogleLoginContainer>
    </>
  );
}
export default Home;
