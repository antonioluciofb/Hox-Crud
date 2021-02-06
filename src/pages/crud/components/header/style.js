import styled from "styled-components";

const Container = styled.div`
  width: 35%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 0px 0px 10px 10px;
  background-color: black;

  color: white;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 4px;

  h1 {
    margin: 0px;
    font-size: 40px;
  }

  .options {
    display: flex;
    justify-content: center;
  }

  li {
    margin-right: 5px;
    letter-spacing: 1px;
    list-style: none;

    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;

  border: none;
  border-radius: 8px;
  color: white;

  font-family: "Bebas Neue", cursive;
  letter-spacing: 4px;
  
  cursor: pointer;

  :focus {
    outline-style: none;
  }
`;

export { Container, Button };
