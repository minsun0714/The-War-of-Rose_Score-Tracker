import styled from "styled-components";
import { GoogleLoginBtn } from "../Home/HomeStyle";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

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

export const Modal = styled(Dialog)`
  margin: 0 0 90px 20px;
  width: 320px;
`;

export const UserNameWrapper = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  background-color: #955959;
`;
export const WriteYourNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #955959;
  padding-top: 20px;
`;
export const WriteYourNames = styled.h1`
  font-size: 25px;
  color: #e1d8d8;
`;

export const AvatarImg = styled.img`
  margin-right: 10px;
`;

export const ActionsWrapper = styled(DialogActions)`
  background-color: #e2a0a0;
`;

export const ActionBtn = styled(StartBtn)``;

export const UserNameInput = styled(TextField)`
  background-color: #955959;
`;
