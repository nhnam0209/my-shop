import NavigationBar from "../src/components/NavigationBar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Home from "../src/pages";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <header className="">
        <NavigationBar></NavigationBar>
      </header>
      <Routes>
        <Route
          path="*"
          errorElement={<ErrorPage />}
          action={() => {
            throw new Response("Bad Request", { status: 400 });
          }}
        />
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="about-us"
          element={<AboutUs />}
          errorElement={<ErrorPage />}
        />
        <Route path="shop" element={<Shop />} errorElement={<ErrorPage />} />
        <Route path="cart" element={<Cart />} errorElement={<ErrorPage />} />
        <Route path="contact-us" element={<ContactUs />} errorElement={<ErrorPage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
