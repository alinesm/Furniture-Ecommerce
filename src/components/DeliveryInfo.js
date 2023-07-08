import React, { useState } from "react";
import styled from "styled-components";
import FormField from "./FormField";

function DeliveryInfo({ deliveryInfoDisable, setDeliveryInfoDisable }) {
  // const [deliveryInfoDisable, setDeliveryInfoDisable] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (zipcode && city && address && state) {
      setDeliveryInfoDisable(false);
    } else {
      alert("fill all fields");
    }
  }
  return (
    <Wrapper isDisable={deliveryInfoDisable}>
      <h5>Delivery Address</h5>
      <form>
        <label htmlFor="zipcode">Zipcode</label>
        <input
          onChange={(e) => setZipcode(e.target.value)}
          value={zipcode}
          type="number"
          placeholder="zipcode"
          required
        />
        <label htmlFor="zipcode">Zipcode</label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          type="text"
          placeholder="address"
          required
        />
        <label htmlFor="zipcode">Zipcode</label>
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          placeholder="city"
          required
        />
        <label htmlFor="state">State</label>
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          type="text"
          placeholder="state"
          required
        />

        <button type="submit" className="btn" onClick={handleSubmit}>
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

export default DeliveryInfo;
