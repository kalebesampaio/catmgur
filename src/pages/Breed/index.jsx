import { Card } from "../../components/Card";
import { HomeStyle, TitleStyle } from "./styles";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { AuthContext } from "../../providers/breed.provider";

export const Breed = () => {
  const { data, name } = useContext(AuthContext);
  return (
    <>
      <Header />
      <HomeStyle>
        <div className="hd"></div>
        <div className="container">
          <TitleStyle>{name}</TitleStyle>
          <ul>
            {data?.map((cat) => (
              <Card key={cat.id} url={cat.url} text={cat.id} />
            ))}
          </ul>
        </div>
      </HomeStyle>
    </>
  );
};
