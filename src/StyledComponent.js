import styled, { css } from "styled-components";

const Conrainer = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90px;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Conrainer color="orangered">
      <Button>안녕하세요.</Button>
      <Button inverted={true}>테두리만</Button>
    </Conrainer>
  );
};

export default StyledComponent;
