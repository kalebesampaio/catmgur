import { LogoImg, HeaderStyle, LogoText } from "./styles";
import Logo from "../../assets/Logo.png";

export const Header = () => {
  return (
    <HeaderStyle>
      <LogoImg src={Logo} />
      <LogoText>CATMGUR</LogoText>
    </HeaderStyle>
  );
};
