import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Home from "./pages";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ContactUs from "./pages/ContactUs";
import ProductList from "./pages/Product/ProductList";
import Product from "./pages/Product/Product";

function App() {
  return (
    <div className="App">
      <header className="">
        <NavigationBar />
      </header>
      <Routes>
        <Route
          path="*"
          errorElement={<ErrorPage />}
          action={() => {
            throw new Response("Not Found", { status: 404 });
          }}
        />
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="aboutus"
          element={<AboutUs />}
          errorElement={<ErrorPage />}
        />
        <Route path="shop" element={<Shop />} errorElement={<ErrorPage />} />
        <Route
          path="shop/:label"
          element={<ProductList />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="shop/:label/:id"
          element={<Product />}
          errorElement={<ErrorPage />}
        />
        <Route path="cart" element={<Cart />} errorElement={<ErrorPage />} />
        <Route
          path="contact"
          element={<ContactUs />}
          errorElement={<ErrorPage />}
        />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
