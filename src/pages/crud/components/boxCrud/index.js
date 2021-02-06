import React, { useState, useEffect } from "react";
import { Container, CrudBox, ButtonCheck } from "./style";
import { verify } from "jsonwebtoken";

import { useHistory } from "react-router-dom";

import { connect as Connect } from "react-redux";
import pagination from "../../../../store/actions/paginationAction";
import selectedProducts from "../../../../store/actions/selectedProductAction";
import orderArray from "../../../../store/actions/orderArrayAction";

import ModalAdd from "../modals/modalAdd/index";
import ModalEdit from "../modals/modalEdit/index";
import ModalExclude from "../modals/modalExclude/index";
import Button from "./button/index";

import { FaArrowRight, FaArrowLeft } from "react-icons/all";

function Crud({ reduxProducts, pagination, selectedProducts, orderArray }) {
  const history = useHistory();

  const [modal, setModal] = useState({
    title: "",
    isAdd: false,
    isExclude: false,
    isEdit: false,
    products: [],
  });

  const [productsRedux, setProductsRedux] = useState();
  const [hasNextPage, setHasNextPage] = useState(null);

  useEffect(() => {
    async function loadData() {
      setProductsRedux(await reduxProducts.products);
      setHasNextPage(await reduxProducts.hasNextPage);
    }
    loadData();
  }, [reduxProducts]);

  function checkboxValue(item) {
    const findProduct = reduxProducts.selectedProducts.some(
      (element) => element.id === item.id
    );
    if (findProduct) {
      return true;
    } else {
      return false;
    }
  }
  if (reduxProducts.login.auth) {
    var decoded = verify(
      reduxProducts.login.token,
      process.env.REACT_APP_SECRET
    );

    if (decoded.id === undefined) {
      history.push("/");
    }
  }

  if (!reduxProducts.login.auth) {
    history.push("/");
  }

  return (
    <Container>

      {modal.isAdd && (
        <ModalAdd
          title={modal.title}
          close={() => {
            setModal({ ...modal, isAdd: false });
          }}
        />
      )}
      {modal.isEdit && (
        <ModalEdit
          title={modal.title}
          close={() => {
            setModal({ ...modal, isEdit: false });
          }}
        />
      )}
      {modal.isExclude && (
        <ModalExclude
          title={modal.title}
          close={() => {
            setModal({ ...modal, isExclude: false });
          }}
        />
      )}
      <CrudBox>
        <div className="boxTable">
          <div className="headerTable">
            <h2>Lista de Produtos</h2>

            <div className="options">
              <Button
                openModal={() => {
                  setModal({
                    ...modal,
                    products: modal.products,
                    title: "Adicionar Produto",
                    isAdd: true,
                  });
                  console.log(modal);
                }}
                icon="Plus"
              ></Button>
              <Button
                openModal={() => {
                  setModal({
                    ...modal,
                    title: "Deletar Produto",
                    isExclude: true,
                  });
                }}
                icon="Trash"
              ></Button>
              <Button
                openModal={() => {
                  setModal({
                    ...modal,
                    open: true,
                    title: "Editar Produto",
                    isEdit: true,
                  });
                }}
                icon="Pencil"
              ></Button>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th style={{ cursor: "default" }}>Selecione</th>
                <th
                  onClick={() => {
                    orderArray(reduxProducts.order.name, "name");
                  }}
                >
                  Nome
                </th>
                <th
                  onClick={() => {
                    orderArray(reduxProducts.order.manufacture, "manufacture");
                  }}
                >
                  Data de Fabrição
                </th>
                <th
                  onClick={() => {
                    orderArray(
                      reduxProducts.order.expirationDate,
                      "expirationDate"
                    );
                  }}
                >
                  Validade
                </th>
                <th
                  onClick={() => {
                    orderArray(reduxProducts.order.perishable, "perishable");
                  }}
                >
                  Perecível
                </th>
                <th
                  onClick={() => {
                    orderArray(reduxProducts.order.price, "price");
                  }}
                >
                  Preço
                </th>
              </tr>
              {productsRedux &&
                productsRedux.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th>
                        <ButtonCheck
                          type="checkbox"
                          checked={checkboxValue(item)}
                          onClick={() => {
                            selectedProducts(item);
                          }}
                        />
                      </th>
                      <th>{item.name}</th>
                      <th>{item.manufacture}</th>
                      <th>{item.expirationDate}</th>
                      <th>{item.perishable ? "Sim" : "Não"}</th>
                      <th>{"R$" + item.price}</th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <FaArrowLeft
            onClick={() => {
              pagination(reduxProducts.page - 1, "last");
            }}
            style={{ display: reduxProducts.page === 1 ? "none" : "block" }}
            size={25}
            color="white"
          />
          <p>{reduxProducts.page}</p>
          <FaArrowRight
            onClick={() => {
              if (hasNextPage) {
                pagination(reduxProducts.page + 1, "next");
              } else {
              }
            }}
            style={{ display: hasNextPage ? "block" : "none" }}
            size={25}
            color="white"
          />
        </div>
      </CrudBox>
    </Container>
  );
}

function mapStateToProps({ stateProducts }) {
  return {
    reduxProducts: stateProducts,
  };
}

function mapDispachToProps(dispatch) {
  return {
    pagination(page, howChange) {
      const action = pagination(page, howChange);
      dispatch(action);
    },
    selectedProducts(product) {
      const action = selectedProducts(product);
      dispatch(action);
    },
    orderArray(order, value) {
      const action = orderArray(order, value);
      dispatch(action);
    },
  };
}

export default Connect(mapStateToProps, mapDispachToProps)(Crud);
