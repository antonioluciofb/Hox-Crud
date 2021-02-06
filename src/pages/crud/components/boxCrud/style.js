import styled from "styled-components";

const Container = styled.div`
  width: 97%;
  height: 85vh;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  margin: 10px;
`;

const CrudBox = styled.div`
  min-width: 50%;
  max-width: 80%;
  max-height: 70vh;

  .headerTable {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: "Bebas Neue", cursive;

    margin-bottom: 10px;
    background-color: rgba(0, 0, 0, 0.9);

    h2 {
      margin-left: 50px;
      font-size: 30px;

      letter-spacing: 2px;
      color: white;
    }

    .options {
      display: flex;
    }
  }

  .boxTable {
    background-color: white;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
  }

  table {
    font-family: "Bebas Neue", cursive;
    border-collapse: collapse;
    width: 100%;
  }

  th {
    cursor: pointer;
  }

  td,
  th {
    text-align: center;
    padding: 8px;
  }

  .pagination{
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: bold;
    font-family: "Bebas Neue", cursive;

    border-radius: 0px 0px 5px 5px;

    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.9);

    p{
      margin: 0px 15px;
    }
  }
`;

const ButtonCheck = styled.input`
  width: 20px;
  height: 20px;

  align-self: ${(props) => props.flex};
  margin-left: ${(props) => props.aling};

  :checked {
    background-color: black;
  }
`;

export { Container, CrudBox, ButtonCheck };
