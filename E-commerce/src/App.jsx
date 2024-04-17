import NavBar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import mens_banner from "./components/assets/banner_mens.png";
import womens_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";
import jewellery_banner from "./components/assets/jewe_banner.avif";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Nointernet from "./components/NoInternet/Nointernet.jsx";

function App() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  return (
    <>
      {online ? (
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/mens"
              element={<Categories banner={mens_banner} catergory="men" />}
            />
            <Route
              path="/womens"
              element={<Categories banner={womens_banner} catergory="women" />}
            />
            <Route
              path="/kids"
              element={<Categories banner={kids_banner} catergory="kid" />}
            />
            <Route
              path="/jewellery"
              element={
                <Categories banner={jewellery_banner} catergory="jewellery" />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Product />}>
              <Route path=":id" element={<Product />} />
            </Route>
          </Routes>
        </Router>
      ) : (
        <Nointernet />
      )}
    </>
  );
}

export default App;
