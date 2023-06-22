import NavigationBar from "./components/NavigationBar/NavigationBar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Home from "./pages";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import ContactUs from "./pages/ContactUs";
import ProductList from "./pages/Product/ProductList";
import Product from "./pages/Product/Product";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ContextIndex from "./contexts";

function App() {
  return (
    <div className="App">
      <ContextIndex>
        <header>
          <NavigationBar />
        </header>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:label" element={<ProductList />} />
          <Route path="shop/:label/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </ContextIndex>
    </div>
  );
}

export default App;
