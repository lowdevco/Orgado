import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Common Components

import Navbar from "./assets/components/homepage-components/Navbar";
import NavbarCommon from "./assets/components/common-components/NavbarCommon";
import Header from "./assets/components/homepage-components/Header";
import Subbar from "./assets/components/homepage-components/Subbar";
import Footer from "./assets/components/common-components/Footer";

// Pages import

import Home from "./assets/pages/Home";
import ContactPage from "./assets/pages/ContactPage";
import BlogPage from "./assets/pages/BlogPage";
import TrackOrder from "./assets/pages/TrackOrder";
import SignupPage from "./assets/components/loginpage-components/SignupPage";
import LoginPage from "./assets/components/loginpage-components/LoginPage";
import Cart from "./assets/pages/Cart";
import Shop from "./assets/pages/Shop";
import Favorite from "./assets/pages/Favorite";

function App() {
  const location = useLocation();

  const currentPage = location.pathname === "/";

  return (
    <>
      {currentPage ? <Header /> : <Subbar />}
      {currentPage ? <Subbar /> : <Header />}
      {currentPage ? <Navbar /> : <NavbarCommon />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/fav" element={<Favorite/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
