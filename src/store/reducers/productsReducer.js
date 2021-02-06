import api from "../../API/api";
import orderArray from "../../utils/orderArray";

var initialState = {
  login: [{auth: null}, {token: "0"}],
  products: [],
  selectedProducts: [],
  page: 1,
  hasNextPage: null,
  lastOrder: {
    name: undefined,
    ascDesc: undefined,
  },
  order: {
    name: true,
    manufacture: true,
    expirationDate: true,
    perishable: true,
    price: true,
  },
};

async function requestData(page, lastAscDesc, lastName) {
  const responseData = await api.get(`/products?_page=${page}`);
  var orderResponse = orderArray(responseData.data, lastAscDesc, lastName);
  return orderResponse;
}
async function orderRequest(name, ascDesc, page) {
  const responseData = await api.get(`/products?_page=${page}`);
  var orderResponse = orderArray(responseData.data, ascDesc, name);
  return orderResponse;
}

async function hasNextPage(page) {
  const responseData = await api.get(`/products?_page=${page + 1}`);
  return responseData.data.length > 0 ? true : false;
}

function ProductsReducer(state = initialState, { type, payload }) {
  if (type === "LOGIN-TOKEN") {
    if(payload.auth){
    state.login.auth = payload.auth
    state.login.token = payload.token
    return {...state}
  }else{return {...state}}
  }

  if (type === "SELECTED_PRODUCT") {
    const { selectedProducts } = state;
    const findProduct = selectedProducts.find((item) => item.id === payload.id);
    if (findProduct === undefined) {
      state.selectedProducts.push(payload);
    } else {
      const filteredProduct = selectedProducts.filter(
        (item) => item.id !== payload.id
      );
      state.selectedProducts = filteredProduct;
    }
    return { ...state };
  } else if (type === "CHANGE_PAGE") {
    state.page = payload;
    state.products = requestData(
      state.page,
      state.lastOrder.ascDesc,
      state.lastOrder.name
    );
    state.hasNextPage = hasNextPage(state.page);

    return { ...state };
  } else if (type === "UPDATE_STATE") {
    state.products = requestData(
      state.page,
      state.lastOrder.ascDesc,
      state.lastOrder.name
    );
    state.hasNextPage = hasNextPage(state.page);

    if (payload === "clear") {
      state.selectedProducts = [];
      return { ...state };
    } else {
      return { ...state };
    }
  } else if (type === "ORDER_ARRAY") {
    const ascDesc = state.order[payload.value] ? "asc" : "desc";
    state.products = orderRequest(payload.value, ascDesc, state.page);
    state.lastOrder.name = payload.value;
    state.lastOrder.ascDesc = ascDesc;
    state.order[payload.value] = !state.order[payload.value];
    return { ...state };
  }
  state.products = requestData(
    state.page,
    state.lastOrder.ascDesc,
    state.lastOrder.name
  );
  state.hasNextPage = hasNextPage(state.page);
  return { ...state };
}

export default ProductsReducer;
