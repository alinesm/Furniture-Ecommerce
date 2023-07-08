import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import PageHero from "../components/PageHero";
import { formatPrice } from "../assets/utils/helpers";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";

const SingleProduct = ({ cart, setCart }) => {
  const [singleProduct, setSingleProduct] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://course-api.com/react-store-single-product?id=${id}`)
      .then((res) => setSingleProduct(res.data))
      .catch((err) => console.log(err.response.data));
  }, [id]);

  if (singleProduct === undefined) {
    return <div>Carregando...</div>;
  }

  console.log(singleProduct);
  // if (loading) {
  //   return <Loading />
  // }
  // if (error) {
  //   return <Error />
  // }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = singleProduct;
  return (
    <Wrapper>
      <PageHero title={name} product={singleProduct} />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className=" product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price"> {formatPrice(price)}</h5>
            <p className="desc"> {description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && (
              <AddToCart
                cart={cart}
                setCart={setCart}
                product={singleProduct}
              />
            )}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
