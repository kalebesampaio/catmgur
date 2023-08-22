import { CardName, CardStyle } from "./styles";

export const Card = ({ url, text }) => {
  return (
    <>
      <CardStyle>
        <img src={url} alt="" />
        <CardName>
          <h3>ID: {text}</h3>
        </CardName>
      </CardStyle>
    </>
  );
};
