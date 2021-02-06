import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.98);

  margin: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img{
    width: 200px;
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;
const BoxLogin = styled.div`
  width: 30%;
  height: 300px;
  background-color: rgb(254,254,254);

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .credentials {
    width: 70%;
    height: 155px;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const InputData = styled.input`
  width: 90%;
  background-color: #000;

  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  font-weight: 300;
  color: #fff;

  border: none;
  border-radius: 8px;
  outline-style: none;

  padding: 10px;
  margin: 10px 0px;

  :focus {
    outline-style: none;
  }

  ::placeholder{
    color: #fff;
    font-size: 15px;
  }
`;

const SignInButton = styled.button`
  width: 25%;
  height: 70px;
  background-color: black;

  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Bebas Neue", cursive;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 2px;

  color: #fff;

  border-radius: 8px;
  border: none;

  transition: all 0.5s ease-in-out;
  :focus{
    outline-style: none;
  }

  :hover{
    color: #000;
    background-color: #fff;
  }
`;

export { Container, BoxLogin, InputData, SignInButton };
