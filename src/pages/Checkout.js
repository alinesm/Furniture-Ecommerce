import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CustomerInfo from "../components/CustomerInfo";
import DeliveryInfo from "../components/DeliveryInfo";
import PageHero from "../components/PageHero";
import StripeCheckout from "../components/StripeCheckout";

const Checkout = ({ cart, shipping_fee, setCart, total_amount }) => {
  const [deliveryInfoDisable, setDeliveryInfoDisable] = useState(false);

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <WrapperSteps>
            <CustomerInfo setDeliveryInfoDisable={setDeliveryInfoDisable} />
            <DeliveryInfo
              deliveryInfoDisable={deliveryInfoDisable}
              setDeliveryInfoDisable={setDeliveryInfoDisable}
            />
            <StripeCheckout
              shipping_fee={shipping_fee}
              setCart={setCart}
              cart={cart}
              total_amount={total_amount}
            />
          </WrapperSteps>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const WrapperSteps = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  width: 70%;
`;

export default Checkout;
