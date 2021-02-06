const pageType = "CHANGE_PAGE"

function Pagination(page) {
  return {
    type: pageType,
    payload: page,
  };
}


export default Pagination;