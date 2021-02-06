import styled from "styled-components";

const Container = styled.button`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 20px;
  background-color: ${(props) => props.color};

  border-style: none;
  border-radius: 50%;

  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export { Container };
