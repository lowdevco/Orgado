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
import ContactPage from "./assets/pages/ContactPage"


function App() {

  const location = useLocation();

  const currentPage = location.pathname === "/";

  return (
    <>
    {currentPage ? <Header/> : <Subbar/>}
    {currentPage ? <Subbar/> : <Header/>}
    {currentPage ? <Navbar/> : <NavbarCommon/>}


    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<ContactPage/>}/>

    </Routes>


      <Footer />
    </>
  );
}

export default App;
