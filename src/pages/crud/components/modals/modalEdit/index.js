import React, { useState } from "react";

import { connect as Connect } from "react-redux";
import updateState from "../../../../../store/actions/updateAction";

import { ButtonCheck, Container, InputModal, Button } from "./style";
import CurrencyInput from "react-currency-input-field";

import api from "../../../../../API/api";

import { checkEditValidate, convertDate, validator } from "../utils";

function ModalEdit({ title, close, reduxProducts, updateState }) {
  // eslint-disable-next-line
  const [products, setProducts] = useState(reduxProducts.selectedProducts);
  const [checked, setChecked] = useState(validator(products));

  async function editProduct() {
    var name = document.getElementById("editName").value;
    var manufacture = convertDate(document.getElementById("editDate").value);
    var expirationDate = convertDate(
      document.getElementById("editValidate").value
    );
    var price = document.getElementById("inputCurrency").value;
    var perishable = document.getElementById("editCheck").checked;

    if (perishable && expirationDate === "Invalid Date") {
      return alert("Data de validade incorreta");
    }
    if (!checkEditValidate(manufacture, expirationDate)) {
      return null;
    }
    if (products[0].perishable && !perishable) {
      expirationDate = "N/A";
    }
    await api.put(`/products/${products[0].id}`, {
      name: name === "" ? products[0].name : name,
      manufacture:
        manufacture === "Invalid Date"
          ? products[0].manufacture
          : manufacture.replaceAll("-", "/"),
      expirationDate:
        expirationDate === "Invalid Date"
          ? products[0].expirationDate
          : expirationDate.replaceAll("-", "/"),
      perishable,
      price: price === "" ? products[0].price : price.replaceAll(".", ","),
    });
    setTimeout(() => {
      close();
      updateState("clear");
    }, 300);
  }

  if (products.length !== 1)
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
            <p style={{ fontSize: "20px" }} id="title">
              {products.length === 0
                ? "Você não tem nenhum produto selecionado"
                : "Desculpe, você não pode editar mais de um produto ao mesmo tempo!"}
            </p>
          </div>
        </Container>
      </div>
    );
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
            <InputModal id="editName" placeholder={products[0].name} />
            <label>Data de Fabricação</label>
            <InputModal
              placeholder={products[0].manufacture}
              id="editDate"
              type="date"
            />
            <label>Validade</label>
            <InputModal
              id="editValidate"
              disabled={!checked}
              placeholder={products[0].expirationDate}
              type="date"
            />
            <CurrencyInput
              id="inputCurrency"
              name="input-name"
              placeholder={"R$" + products[0].price}
              decimalsLimit={2}
            />
            <label>Perecível</label>
            <ButtonCheck
              id="editCheck"
              type="checkbox"
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <Button
              onClick={() => {
                editProduct();
              }}
            >
              Editar
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

export default Connect(mapStateToProps, mapDispachToProps)(ModalEdit);
