import React from "react";
import styled from "styled-components";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { formatPrice } from "../assets/utils/helpers";
const CartItem = ({ cartItem, cart, setCart }) => {
  function removeItem(id) {
    const tempCart = cart.filter((item) => item.id !== id);
    setCart(tempCart);
  }

  const increase = (id) => {
    const tempCart = cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount + 1;
        if (newAmount > item.max) {
          newAmount = item.max;
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return setCart(tempCart);
  };

  const decrease = (id) => {
    const tempCart = cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return setCart(tempCart);
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={cartItem.image} alt="" />
        <div>
          <h5 className="name">{cartItem.name}</h5>
          <p className="color">
            color : <span style={{ background: cartItem.color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(cartItem.price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(cartItem.price)}</h5>
      <WrapperAmount className="amount-btns">
        <button
          type="button"
          className="amount-btn"
          onClick={() => decrease(cartItem.id)}
        >
          <FaMinus />
        </button>
        <h2 className="amount">{cartItem.amount}</h2>
        <button
          type="button"
          className="amount-btn"
          onClick={() => increase(cartItem.id)}
        >
          <FaPlus />
        </button>
      </WrapperAmount>
      <h5 className="subtotal">
        {formatPrice(cartItem.price * cartItem.amount)}
      </h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(cartItem.id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    /* width: 100%;
    height: 100%; */
    width: 100px;
    max-height: 70px;
    padding-right: 20px;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      /* width: 70px; */
      height: 100%;
      padding-right: 0px;
      /* padding-right: 20px; */
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
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

export default CartItem;
