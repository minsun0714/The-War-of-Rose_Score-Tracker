import styled from "styled-components";

export const GameTitleContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const GameTitle = styled.span`
  font-size: 40px;
  color: #e1d8d8;
`;

export const GoogleLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px;
`;

export const GoogleLogoBtn = styled.button`
  background-color: white;
  border: none;
  padding: 25.5px;
  background-image: url("/google_logo.png");
`;
export const GoogleLoginBtn = styled.button`
  background-color: #4285f4;
  height: 51px;
  width: 200px;
  color: white;
  border: none;
  font-family: Inter;
  box-shadow: 1px 5px 3px rgba(0, 0, 0, 0.3);
`;
