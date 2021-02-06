function orderArray(array, order, props) {
  if (order === undefined || props === undefined) {
    return array;
  } else if (order === "asc") {
    var asc = array.sort((a, b) => {
      if (a[props] < b[props]) {
        return 1;
      }
      if (a[props] > b[props]) {
        return -1;
      }
      return 0;
    });
    return asc;
  } else if (order === "desc") {
    var desc = array.sort((a, b) => {
      if (a[props] < b[props]) {
        return -1;
      }
      if (a[props] > b[props]) {
        return 1;
      }
      return 0;
    });
    return desc;
  }
}

export default orderArray;
