import { LogoImg, HeaderStyle, LogoText } from "./styles";
import Logo from "../../assets/Logo.png";
import { Dropdown } from "rsuite";
import ButtonToolbar from "rsuite/ButtonToolbar";
import "rsuite/dist/rsuite.min.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/breed.provider";

export const Header = () => {
  const navigate = useNavigate();
  const { setBreed, setName } = useContext(AuthContext);
  const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props}>
      <Dropdown.Item
        onClick={() => {
          setBreed("");
          navigate("/", { replace: true });
        }}
      >
        Todos
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=abys");
          navigate("../breed/abys", { replace: true });
          setName("Abyssinian");
        }}
      >
        Abyssinian
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=aege");
          navigate("../breed/aege", { replace: true });
          setName("Aegean");
        }}
      >
        Aegean
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=abob");
          navigate("../breed/abob", { replace: true });
          setName("American Bobtail");
        }}
      >
        American Bobtail
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=acur");
          navigate("../breed/acur", { replace: true });
          setName("American Curl");
        }}
      >
        American Curl
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=asho");
          navigate("../breed/asho", { replace: true });
          setName("American Shorthair");
        }}
      >
        American Shorthair
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=awir");
          navigate("../breed/awir", { replace: true });
          setName("American Wirehair");
        }}
      >
        American Wirehair
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=amau");
          navigate("../breed/amau", { replace: true });
          setName("Arabian Mau");
        }}
      >
        Arabian Mau
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=amis");
          navigate("../breed/amis", { replace: true });
          setName("Australian Mist");
        }}
      >
        Australian Mist
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=bali");
          navigate("../breed/bali", { replace: true });
          setName("Balinese");
        }}
      >
        Balinese
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=bamb");
          navigate("../breed/bamb", { replace: true });
          setName("Bambino");
        }}
      >
        Bambino
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=beng");
          navigate("../breed/beng", { replace: true });
          setName("Bengal");
        }}
      >
        Bengal
      </Dropdown.Item>

      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=birm");
          navigate("../breed/birm", { replace: true });
          setName("Birman");
        }}
      >
        Birman
      </Dropdown.Item>

      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=ctif");
          navigate("../breed/ctif", { replace: true });
          setName("Chantilly-Tiffany");
        }}
      >
        Chantilly-Tiffany
      </Dropdown.Item>

      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=chee");
          navigate("../breed/chee", { replace: true });
          setName("Cheetoh");
        }}
      >
        Cheetoh
      </Dropdown.Item>

      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=lihu");
          navigate("../breed/lihu", { replace: true });
          setName("Dragon Li");
        }}
      >
        Dragon Li
      </Dropdown.Item>

      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=emau");
          navigate("../breed/emau", { replace: true });
          setName("Egyptian Mau");
        }}
      >
        Egyptian Mau
      </Dropdown.Item>

      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=norw");
          navigate("../breed/norw", { replace: true });
          setName("Norwegian Forest Cat");
        }}
      >
        Norwegian Forest Cat
      </Dropdown.Item>

      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=ragd");
          navigate("../breed/ragd", { replace: true });
          setName("Ragdoll");
        }}
      >
        Ragdoll
      </Dropdown.Item>

      <Dropdown.Item
        onClick={() => {
          setBreed("&breed_ids=ycho");
          navigate("../breed/ycho", { replace: true });
          setName("York Chocolate");
        }}
      >
        York Chocolate
      </Dropdown.Item>
    </Dropdown>
  );

  return (
    <HeaderStyle>
      <div>
        <LogoImg src={Logo} />
        <LogoText>CATMGUR</LogoText>
      </div>
      <div>
        <ButtonToolbar>
          <CustomDropdown title="Raça" />
        </ButtonToolbar>
      </div>
    </HeaderStyle>
  );
};
