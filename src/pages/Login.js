import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function Login({ token, setToken, setName, setLoginClicked }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setLoginClicked(false);
    navigate("/home");

    // const URL = `${process.env.REACT_APP_API_URL}/`;
    // const body = { email, password };

    // const promise = axios.post(URL, body);
    // promise.then((res) => {
    //   setToken(res.data.token);
    //   setName(res.data.name);
    //   navigate("/home");
    // });
    // promise.catch((err) => {
    //   alert("email ou senha incorreta");
    //   console.log(err);
    // });
  }

  console.log(token);

  return (
    <Wrapper>
      <LoginContainer>
        <h1>Login</h1>

        <div className="inputsContainer">
          <form>
            <input
              data-test="email-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="E-mail"
            />
            <input
              data-test="password-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Senha"
            />
            <button data-test="login-btn" type="submit" onClick={handleLogin}>
              Entrar
            </button>
          </form>
        </div>
        <Link data-test="signup-link" to="/sign-up">
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </LoginContainer>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  padding-top: 50px;
  background-color: black;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
`;

const LoginContainer = styled.div`
  margin: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary-2);
  width: 303px;
  padding: 10px;

  h1,
  p {
    color: white;
  }
  input {
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    padding-left: 11px;
    &::placeholder {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #dbdbdb;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    border: none;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 25px;
  }
`;
