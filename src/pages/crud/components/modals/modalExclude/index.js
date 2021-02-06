import React, { useState } from "react";

import { connect as Connect } from "react-redux";
import updateState from "../../../../../store/actions/updateAction";
import pagination from "../../../../../store/actions/paginationAction";

import { ButtonCheck, Container, InputModal, Button } from "./style";

import api from "../../../../../API/api";

import { validator } from "../utils";

function ModalExclude({
  title,
  close,
  reduxProducts,
  updateState,
  pagination,
}) {
  // eslint-disable-next-line
  const [products, setProducts] = useState(reduxProducts.selectedProducts);
  // eslint-disable-next-line
  const [checked, setChecked] = useState(validator(products));

  async function deleteProduct(props) {
    if (props.all) {
      var allProducts = await reduxProducts.products;
      var allID = products.map((item) => item.id);
      await api.delete(`/products/${String(allID)}`);
      setTimeout(() => {
        close();
        updateState("clear");
      }, 600);
      if (allProducts.length === products.length) {
        if (reduxProducts.page === 1) {
          setTimeout(() => {
            close();
            updateState("clear");
          }, 300);
          return null;
        } else {
          pagination(reduxProducts.page - 1);
          setTimeout(() => {
            close();
            updateState("clear");
          }, 300);
        }
      }
    } else {
      const allProducts = await reduxProducts.products;
      await api.delete(`/products/${products[0].id}`);
      if (allProducts.length === products.length) {
        if (reduxProducts.page === 1) {
          setTimeout(() => {
            close();
            updateState("clear");
          }, 300);
          return null;
        } else {
          pagination(reduxProducts.page - 1);
          setTimeout(() => {
            close();
            updateState("clear");
          }, 300);
        }
      }
    }
  }

  if (products.length !== 1) {
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
              {products.length > 1
                ? "Deseja deletar todos esses itens?"
                : "Por favor, selecione algo para deletar"}
            </p>
            {products.length > 1 ? (
              <Button
                onClick={() => {
                  deleteProduct({ all: true });
                  setTimeout(() => {}, 200);
                }}
              >
                Deletar
              </Button>
            ) : null}
          </div>
        </Container>
      </div>
    );
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
            <InputModal readOnly placeholder={products[0].name} />
            <label>Data de Fabricação</label>
            <InputModal
              readOnly
              placeholder={products[0].manufacture}
              id="date"
              type="text"
            />
            <label>Validade</label>
            <InputModal
              readOnly
              placeholder={products[0].expirationDate}
              type="text"
            />
            <InputModal
              readOnly
              placeholder={"R$" + products[0].price}
              type="number"
            />
            <label>Perecível</label>
            <ButtonCheck
              id="checkPer"
              readOnly
              type="checkbox"
              checked={checked}
            />
            <Button
              onClick={() => {
                deleteProduct({ all: false });
              }}
            >
              Deletar
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
    pagination(page) {
      const action = pagination(page);
      dispatch(action);
    },
  };
}

export default Connect(mapStateToProps, mapDispachToProps)(ModalExclude);
