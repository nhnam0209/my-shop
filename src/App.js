import NavigationBar from '../src/components/NavigationBar/NavigationBar'
import { Routes, Route } from "react-router-dom";
import Shop from './pages/Shop'
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Home from '../src/pages';
import ErrorPage from './pages/ErrorPage';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <NavigationBar></NavigationBar>
      </header>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="aboutus" element={<AboutUs />} errorElement={<ErrorPage />} />
        <Route path="shop" element={<Shop />} errorElement={<ErrorPage />} />
        <Route path="cart" element={<Cart />} errorElement={<ErrorPage />} />
        <Route
          errorElement={<ErrorPage />}
          action={() => {
            throw new Response("Bad Request", { status: 400 });
          }}
        />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App