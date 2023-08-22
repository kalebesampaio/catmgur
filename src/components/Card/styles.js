import { styled } from "styled-components";

export const CardStyle = styled.li`
  width: 295px;
  max-height: 517px;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  background-color: #474a51;
  img {
    width: 100%;
    max-height: 452px;
  }
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const CardName = styled.div`
  color: #fff;
  height: 60px;
  width: 100%;
  padding: 15px;

  h3 {
    font-size: 1rem;
  }
`;
