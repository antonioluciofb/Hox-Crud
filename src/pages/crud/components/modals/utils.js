function convertDate(value) {
  const utcDate = new Date(value);
  const convertDate = new Date(
    utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
  );
  return convertDate.toLocaleDateString("pt-br");
}

function checkValidate(manufacture, expirationDate, perishable) {
  var strDate = manufacture;
  var strValidate = expirationDate;
  var removeTrashDate = strDate.split("/");
  var removeTrashValidate = strValidate.split("/");
  var dateManufacture = new Date(
    removeTrashDate[2],
    removeTrashDate[1] - 1,
    removeTrashDate[0]
  );
  var dateValidate = new Date(
    removeTrashValidate[2],
    removeTrashValidate[1] - 1,
    removeTrashValidate[0]
  );
  if (dateManufacture > dateValidate) {
    alert("Data de Validade inferior a data de fabricação");
    return false;
  } else if (
    manufacture === "Invalid Date" &&
    expirationDate === "Invalid Date"
  ) {
    alert("Data Inválida");
    return false;
  } else if (perishable && expirationDate === "Invalid Date") {
    alert("Data de Validade inexistente");
    return false;
  } else {
    return true;
  }
}
function checkEditValidate(manufacture, expirationDate) {
  var strDate = manufacture;
  var strValidate = expirationDate;
  var removeTrashDate = strDate.split("/");
  var removeTrashValidate = strValidate.split("/");
  var dateManufacture = new Date(
    removeTrashDate[2],
    removeTrashDate[1] - 1,
    removeTrashDate[0]
  );
  var dateValidate = new Date(
    removeTrashValidate[2],
    removeTrashValidate[1] - 1,
    removeTrashValidate[0]
  );
  if (dateManufacture > dateValidate) {
    alert("Data de Validade inferior a data de fabricação");
    return false;
  } else {
    return true;
  }
}

function validator(products) {
  if (products.length === 0) {
    return undefined;
  } else {
    return products[0].perishable;
  }
}
export { checkValidate, checkEditValidate, convertDate, validator };
