import { styled } from "styled-components";

export const HomeStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #2e3035;
  .hd {
    height: 120px;
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
`;
export const TitleStyle = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");
  color: #ffffff;
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 20px;
`;
