import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CartColumns from "../components/CartColumns";
import CartItem from "../components/CartItem";
import CartTotals from "../components/CartTotals";
import PageHero from "../components/PageHero";

const Cart = ({ cart, setCart, total_amount, shipping_fee }) => {
  function clearCart() {
    setCart([]);
  }

  if (cart.length < 1) {
    return (
      <WrapperMain className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </WrapperMain>
    );
  }

  console.log("cart", cart);

  return (
    <main>
      <PageHero title="cart" />
      <WrapperMain className="page">
        <WrapperSection className="section section-center">
          <CartColumns />
          {cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                cartItem={item}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
          <hr />
          <div className="link-container">
            <Link to="/products" className="link-btn">
              continue shopping
            </Link>
            <button
              type="button"
              className="link-btn clear-btn"
              onClick={clearCart}
            >
              clear shopping cart
            </button>
          </div>
          <CartTotals total_amount={total_amount} shipping_fee={shipping_fee} />
        </WrapperSection>
      </WrapperMain>
    </main>
  );
};

const WrapperMain = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

const WrapperSection = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

export default Cart;
