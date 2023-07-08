import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";

const AddToCart = ({ product, cart, setCart }) => {
  const [mainColor, setMainColor] = useState(product.colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    let oldAmount = amount + 1;
    if (oldAmount > product.stock) {
      oldAmount = product.stock;
    }
    setAmount(oldAmount);
  };
  const decrease = () => {
    let oldAmount = amount - 1;
    if (oldAmount < 1) {
      oldAmount = 1;
    }
    setAmount(oldAmount);
  };

  function addToCart() {
    const tempCart = cart.find((c) => c.id === product.id + mainColor);
    if (tempCart) {
      const tempCartAux = cart.map((cartItem) => {
        if (cartItem.id === product.id + mainColor) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > newAmount.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      setCart(tempCartAux);
    } else {
      const newItem = {
        id: product.id + mainColor,
        name: product.name,
        color: mainColor,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      setCart([...cart, newItem]);
    }
  }

  return (
    <Wrapper>
      <div className="colors">
        <span> colors : </span>
        <div>
          {product.colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={
                  mainColor === color ? "color-btn active" : "color-btn"
                }
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <WrapperAmount className="amount-btsn">
          <button type="button" className="amount-btn" onClick={decrease}>
            <FaMinus />
          </button>
          <h2 className="amount">{amount}</h2>
          <button type="button" className="amount-btn" onClick={increase}>
            <FaPlus />
          </button>
        </WrapperAmount>
        <Link to="/cart" className="btn" onClick={addToCart}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

const WrapperAmount = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AddToCart;
