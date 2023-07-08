import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import ListView from "./ListView";

const ProductList = ({ products, filteredProducts, setProducts, gridView }) => {
  // useEffect(() => {
  //   axios
  //     .get("https://course-api.com/react-store-products")
  //     .then((res) => {
  //       setProducts(res.data);
  //     })
  //     .catch((err) => console.log(err.response.data));
  // }, []);

  // console.log(products);

  if (filteredProducts.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }
  if (gridView === false) {
    return <ListView filteredProducts={filteredProducts} products={products} />;
  }
  return (
    <Wrapper>
      <div className="products-container">
        {filteredProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
