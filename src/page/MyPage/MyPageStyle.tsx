import styled from "styled-components";
import { GoogleLoginBtn } from "../Home/HomeStyle";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

export const StartButtonContainer = styled(ButtonContainer)``;

export const LogoutButtonContainer = styled(ButtonContainer)``;

export const GoogleLogoutBtn = styled(GoogleLoginBtn)`
  background-color: transparent;
  border: none;
  color: white;
  text-decoration: underline;
  box-shadow: none;
`;

export const StartBtn = styled(GoogleLoginBtn)`
  background-color: #955959;
  font-family: "Inika", sans-serif;
  font-size: 20px;
  border-radius: 10px;
  background-image: linear-gradient(200deg, #955959, #ae7676);
  :active {
    background-image: linear-gradient(150deg, #ae7676, #955959);
  }
`;
