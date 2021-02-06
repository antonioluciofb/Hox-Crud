const orderArrayType = "ORDER_ARRAY";

function orderArray(order, value) {
  return {
    type: orderArrayType,
    payload: { order, value },
  };
}

export default orderArray;
