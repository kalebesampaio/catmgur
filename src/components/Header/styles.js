import { styled } from "styled-components";
import background from "../../assets/background.png";

export const HeaderStyle = styled.header`
  position: fixed;
  z-index: 99;
  box-shadow: 0 0 25px 5px #000;
  width: 100%;
  height: 76px;
  background: url(${background}) no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
`;
export const LogoImg = styled.img`
  width: 60px;
  margin-left: 30px;
`;

export const LogoText = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");
  color: #ffffff;
  font-family: "Dancing Script", cursive;
`;
