const updateAction = "UPDATE_STATE"

function updateState(props) {
  return {
    type: updateAction,
    payload: props,
  };
}


export default updateState;