import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleSubscription(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/cadastro`;

    const body = {
      email: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword,
    };

    const promise = axios.post(URL, body);
    promise.then((res) => {
      alert("Cadastro realizado!");
      navigate("/");
    });
    promise.catch((err) => console.log(err));
  }

  return (
    <Wrapper className="singUpContainer">
      <LoginContainer>
        <h1>Register</h1>
        <form>
          <input
            data-test="user-name-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Nome"
          />
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

          <input
            data-test="user-image-input"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            placeholder="Confirme a senha"
          />
          <button
            data-test="signup-btn"
            type="submit"
            onClick={handleSubscription}
          >
            Cadastrar
          </button>
        </form>

        <Link data-test="login-link" to="/sign-in">
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </LoginContainer>
    </Wrapper>
  );
}

export default Register;

const Wrapper = styled.div`
  padding-top: 50px;
  background-color: lightgray;
  width: 100%;
  height: 100vh;
  /* opacity: 0.4; */
`;

const LoginContainer = styled.div`
  margin: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary-5);
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
    color: black;
    &::placeholder {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: black;
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
