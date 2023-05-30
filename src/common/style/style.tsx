import { createGlobalStyle } from "styled-components";
import { FontURL } from "../type/type";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Inika';
  src: url(${FontURL.FontInika}) format('truetype');
    }

 *{
    box-sizing: border-box;
    margin: 0;
    font-family: 'Inika', sans-serif;

 }
 
 body{
   background-image: url("/rose background.png") ;
 }
`;

export default GlobalStyle;
