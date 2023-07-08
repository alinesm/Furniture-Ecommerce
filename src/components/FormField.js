import React from "react";
import styled from "styled-components";

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} required />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;
  label {
    color: var(--clr-primary-1);
  }
  input {
    width: 100%;
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    &::placeholder {
      text-transform: capitalize;
    }
  }
`;

export default FormField;
