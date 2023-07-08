import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loginClicked, setLoginClicked] = useState(false);
  const shipping_fee = 534;
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("https://course-api.com/react-store-products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  // console.log(products);

  const { total_items, total_amount } = cart.reduce(
    (total, cartItem) => {
      const { amount, price } = cartItem;

      total.total_items += amount;
      total.total_amount += price * amount;
      return total;
    },
    {
      total_items: 0,
      total_amount: 0,
    }
  );

  return (
    <BrowserRouter>
      <NavBar
        loginClicked={loginClicked}
        setLoginClicked={setLoginClicked}
        total_items={total_items}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar
        total_items={total_items}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Routes>
        <Route
          path="/sign-in"
          element={
            <Login
              setLoginClicked={setLoginClicked}
              token={token}
              setToken={setToken}
              setName={setName}
            />
          }
        />
        <Route path="/sign-up" element={<Register />} />
        <Route
          path="/"
          element={<Home products={products} setProducts={setProducts} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              total_amount={total_amount}
              shipping_fee={shipping_fee}
            />
          }
        />
        <Route
          path="/products"
          element={<Products products={products} setProducts={setProducts} />}
        />
        <Route
          path="/products/:id"
          element={<SingleProduct cart={cart} setCart={setCart} />}
        />
        {/* {myUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            login
          </button>
        )} */}
        <Route
          path="/checkout"
          element={
            <Checkout
              setCart={setCart}
              cart={cart}
              total_amount={total_amount}
              shipping_fee={shipping_fee}
            />
          }
        />
        {/* <Route path="/checkout" element={<ProtectedRoute user={user}><Checkout user={user} /></ProtectedRoute> } /> */}
        {/* <Route path="/checkout" element={<Checkout />}>{user ? <Redirect to="/" /> : <Checkout />}</Route> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer loginClicked={loginClicked} />
    </BrowserRouter>
  );
}

export default App;
