import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Filters from "../components/Filters";
import PageHero from "../components/PageHero";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

const Products = ({ products, setProducts }) => {
  const [gridView, setGridView] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [sort, setSort] = useState("price-lowest");

  let maxPrice = products.map((p) => p.price);
  maxPrice = Math.max(...maxPrice);

  const [filters, setFilters] = useState({
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: maxPrice,
    price: maxPrice,
    shipping: false,
  });

  useEffect(() => {
    let tempProducts = [...products];

    //text
    if (filters.text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(filters.text);
      });
    }
    // category
    if (filters.category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === filters.category
      );
    }

    // company
    if (filters.company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === filters.company
      );
    }

    // colors
    if (filters.color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === filters.color);
      });
    }
    // price
    tempProducts = tempProducts.filter(
      (product) => product.price <= filters.price
    );
    // shipping
    if (filters.shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    // console.log("tempProducts", tempProducts);

    setFilteredProducts(tempProducts);
  }, [sort, filters]);

  function clearFilters() {
    setFilters({
      text: "",
      company: "all",
      category: "all",
      color: "all",
      price: maxPrice,
      shipping: false,
    });
  }

  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters
            products={products}
            filters={filters}
            setFilters={setFilters}
            clearFilters={clearFilters}
          />
          <div>
            <Sort
              sort={sort}
              setSort={setSort}
              gridView={gridView}
              setGridView={setGridView}
              filteredProducts={filteredProducts}
            />
            <ProductList
              gridView={gridView}
              products={products}
              setProducts={setProducts}
              filteredProducts={filteredProducts}
            />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Products;
