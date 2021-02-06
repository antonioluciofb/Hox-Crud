import styled from "styled-components";

const Container = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 1s ease-in-out;

  .inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #inputCurrency {
    width: 70%;
    padding: 8px;

    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    font-weight: 300;

    margin-bottom: 20px;
    opacity: 70%;
    border-style: none;

    :focus {
      outline: none;
    }
  }

  .modal-content {
    width: 20%;

    text-align: center;
    font-family: "Bebas Neue", cursive;
    font-size: 30px;

    margin: 15% auto;
    padding: 10px;

    background-color: #fefefe;
    border-radius: 5px;
    border: 1px solid #888;

    position: relative;

    label {
      align-self: flex-start;

      margin-left: 15%;
      font-size: 17px;
      opacity: 50%;
    }

    span {
      position: absolute;

      top: -10px;
      right: 10px;

      font-size: 50px;
    }
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const InputModal = styled.input`
  width: 70%;
  padding: 8px;

  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  font-weight: 300;

  margin-bottom: 20px;
  opacity: 70%;
  border-style: none;

  :focus {
    outline: none;
  }
`;

const ButtonCheck = styled.input`
  width: 20px;
  height: 20px;

  align-self: flex-start;
  margin-left: 15%;

  :checked {
    background-color: black;
  }
`;

const Button = styled.button`
  width: 70%;

  padding: 10px;
  margin: 20px auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Bebas Neue", cursive;
  font-size: 20px;

  color: white;
  border-radius: 5px;
  border-style: none;
  background-color: black;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export { ButtonCheck, Container, InputModal, Button };
