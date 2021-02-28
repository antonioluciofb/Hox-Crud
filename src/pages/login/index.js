import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect as Connect } from "react-redux";

import loginToken from "../../store/actions/loginTokenAction";

import Api from "../../API/api";

// import Logo from "./logo.png";

import { Container, BoxLogin, InputData, SignInButton } from "./style";

function Login({ loginToken }) {
  const history = useHistory();

  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      {/* <img src={Logo} alt="" /> */}
      <h1>CRUD</h1>
      <BoxLogin>
        <div className="credentials">
          <InputData
            onChange={(e) => {
              setUser(e.target.value);
            }}
            placeholder="Login - Username"
          />
          <InputData
          type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Senha"
          />
        </div>
        <SignInButton
          onClick={async () => {
            try {
              const response = await Api.get(
                `/login?user=${user}&password=${password}`
              );
              loginToken(response.data.auth, response.data.token);
              if (response.data.auth) {
                history.push("/crud");
                return null
              } else {
              }
            } catch (error) {
              alert("Usuario Inválido");
            }
          }}
        >
          Entrar
        </SignInButton>
      </BoxLogin>
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
    loginToken(auth, token) {
      const action = loginToken(auth, token);
      dispatch(action);
    },
  };
}

export default Connect(mapStateToProps, mapDispachToProps)(Login);
