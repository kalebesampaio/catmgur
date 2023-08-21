import { CardName, CardStyle } from "./styles";

export const Card = ({ url, text }) => {
  console.log(url);
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
