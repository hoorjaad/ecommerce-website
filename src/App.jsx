import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Login from "./components/Login";
import CartPage from "./components/CartPage";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout></Checkout>} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={isLoggedIn ? <Checkout /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
