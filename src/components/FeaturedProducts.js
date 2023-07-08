import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Error from "./Error";
// import Loading from "./Loading";
import Product from "./Product";
import axios from "axios";

const FeaturedProducts = ({ products, setProducts }) => {
  // useEffect(() => {
  //   const URL = "https://course-api.com/react-store-products";

  //   const promise = axios.get(URL);

  //   promise.then((res) => {
  //     setProducts(res.data);
  //     // console.log(res.data)
  //   });
  //   promise.catch((err) => console.log(err.response.data));
  // }, []);

  // // if (loading) {
  // //   return <Loading />
  // // }
  // // if (error) {
  // //   return <Error />
  // // }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {products.slice(0, 3).map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
