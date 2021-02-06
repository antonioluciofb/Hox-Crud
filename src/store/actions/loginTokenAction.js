const loginTokenType = "LOGIN-TOKEN";

function loginToken(auth, token) {
  return {
    type: loginTokenType,
    payload: { auth, token },
  };
}

export default loginToken;
