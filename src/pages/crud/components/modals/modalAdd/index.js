import React, { useState } from "react";

import { connect as Connect } from "react-redux";
import updateState from "../../../../../store/actions/updateAction";

import { ButtonCheck, Container, InputModal, Button } from "./style";
import CurrencyInput from "react-currency-input-field";

import api from "../../../../../API/api";

import { checkValidate, convertDate } from "../utils";

function ModalAdd({ title, close, reduxProducts, updateState }) {
  const [addCheck, setaddCheck] = useState(false);

  async function addProduct() {
    const name = document.getElementById("addName").value;
    const date = convertDate(document.getElementById("addDate").value);
    const validate = convertDate(document.getElementById("addValidate").value);
    const price = document.getElementById("inputCurrency").value;
    const perishable = document.getElementById("addCheck").checked;

    if (checkValidate(date, validate, perishable)) {
      if (name === "" || price === "" || price === "0") {
        alert("Nome ou Preço não foram definidos");
      } else {
        await api.post("/products", {
          name,
          manufacture: date.replaceAll("-", "/"),
          expirationDate: perishable ? validate.replaceAll("-", "/") : "N/A",
          perishable,
          price: price.replaceAll(".",","),
        });
        setTimeout(() => {
          close();
          updateState();
        }, 300);
      }
    }
  }
  return (
    <div>
      <Container id="myModal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              close();
            }}
          >
            &times;
          </span>
          <p id="title">{title}</p>
          <div className="inputs">
            <InputModal id="addName" placeholder="Nome" />
            <label>Data de Fabricação</label>
            <InputModal id="addDate" type="date" />
            <label>Validade</label>
            <InputModal
              disabled={!addCheck}
              id="addValidate"
              placeholder="Validade"
              type="date"
            />
            <CurrencyInput
              id="inputCurrency"
              name="input-name"
              placeholder="Coloque um Valor em R$"
              decimalsLimit={2}
            />
            <label>Perecível</label>
            <ButtonCheck
              onClick={(e) => {
                setaddCheck(e.target.checked);
              }}
              id="addCheck"
              type="checkbox"
            />
            <Button
              onClick={() => {
                addProduct();
              }}
            >
              Criar
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

function mapStateToProps({ stateProducts }) {
  return {
    reduxProducts: stateProducts,
  };
}
function mapDispachToProps(dispatch) {
  return {
    updateState(props) {
      const action = updateState(props);
      dispatch(action);
    },
  };
}

export default Connect(mapStateToProps, mapDispachToProps)(ModalAdd);
