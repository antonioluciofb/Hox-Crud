const selectedType = "SELECTED_PRODUCT"

function selectedProducts(product) {
  return {
    type: selectedType,
    payload: product,
  };
}


export default selectedProducts;