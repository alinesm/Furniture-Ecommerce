import React from "react";
import styled from "styled-components";
import FormField from "./FormField";

// import './BillingDetails.scss'

function BillingDetails() {
  return (
    <Wrapper>
      <h5>Payment</h5>
      <div className="nameEmail">
        <FormField
          name="nameCard"
          label="FullName card owner"
          type="text"
          placeholder="Jane Doe"
          required
        />
        <FormField
          name="cpfOwner"
          label="CPF owner"
          type="number"
          placeholder="cpf"
          required
        />
      </div>
    </Wrapper>
  );
}

export default BillingDetails;

const Wrapper = styled.div`
  /* border: 1.5px solid black;
  padding: 20px;
  border-radius: 10px; */
`;
