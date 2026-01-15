import Contact from "./assets/components/contactpage-components/Contact";
import Footer from "./assets/components/common-components/Footer";
import Header from "./assets/components/homepage-components/Header";
import HomeProductCategory from "./assets/components/homepage-components/HomeProductCategory";
import Mainsection from "./assets/components/homepage-components/Mainsection";
import Navbar from "./assets/components/homepage-components/Navbar";
import NavbarCommon from "./assets/components/common-components/NavbarCommon";
import Organictab from "./assets/components/homepage-components/Organictab";
import Subbar from "./assets/components/homepage-components/Subbar";
import Tabs from "./assets/components/homepage-components/Tabs";

function App() {
  return (
    <>
      <Header />
      <Subbar />
      {/* <NavbarCommon /> */}
      <Navbar />
      <Mainsection />
      <Tabs />
      <Organictab />
      <HomeProductCategory />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
