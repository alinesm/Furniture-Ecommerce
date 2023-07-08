import React, { useState } from "react";
import styled from "styled-components";
import FormField from "./FormField";

function CustomerInfo({ setDeliveryInfoDisable }) {
  const [customerInfoDisable, setCustomerInfoDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  function handleCustomerInfo(e) {
    e.preventDefault();
    if (email && cpf && phone) {
      setCustomerInfoDisable(false);
      setDeliveryInfoDisable(true);
    } else {
      alert("fill all fields");
    }
  }

  // const [isFormValid, setIsFormValid] = useState(false);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const form = event.target;
  //   console.log(form.email);
  //   // const isEmailValid = form.email.checkValidity();
  //   // const isCpfValid = form.cpf.checkValidity();
  //   // const isPhoneValid = form.cellphone.checkValidity();
  //   setIsFormValid(form.email && form.cpf && form.cellphone);

  //   // setIsFormValid(isCpfValid && isEmailValid && isPhoneValid);
  //   if (isFormValid) {
  //     setCustomerInfoDisable(false);
  //   }
  // }

  return (
    <Wrapper isDisable={customerInfoDisable}>
      <h5>User Info</h5>
      <form>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email..."
          required
        />
        <label htmlFor={cpf}>CPF</label>
        <input
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          type="number"
          placeholder="cpf"
          required
        />
        <label htmlFor={phone}>Phone Number</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="number"
          placeholder="phone"
          required
        />
        {/* <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="jane.doe@example.com"
          required
        />
        <FormField
          name="cpf"
          label="CPF"
          type="number"
          placeholder="cpf"
          required
        />
        <FormField
          name="cellphone"
          label="Phone Number"
          type="number"
          placeholder="your phone number"
          required
        /> */}
        <button type="submit" className="btn" onClick={handleCustomerInfo}>
          Next
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 30%;
  background-color: ${(props) => (props.isDisable ? "white" : "gray")};
  pointer-events: ${(props) => (props.isDisable ? "" : "none")};
  border: 1.5px solid black;
  padding: 20px;
  border-radius: 10px;
  .btn {
    display: block;
    width: 148px;
    margin: 20px auto 0 auto;
    text-align: center;
    color: ${(props) => (props.isDisable ? "white" : "green")};
  }
  label {
    color: var(--clr-primary-1);
  }
  input {
    width: 100%;
    margin-bottom: 7px;
    padding: 0.5rem;
    background-color: ${(props) =>
      props.isDisable ? "var(--clr-grey-10)" : "green"};
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    &::placeholder {
      text-transform: capitalize;
    }
  }
`;

export default CustomerInfo;
