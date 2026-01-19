import React from "react";
import Mainsection from "../components/homepage-components/Mainsection";
import Tabs from "../components/homepage-components/Tabs";
import Organictab from "../components/homepage-components/Organictab";
import HomeProductCategory from "../components/homepage-components/HomeProductCategory";
import TrendingProduct from "../components/homepage-components/TrendingProduct";
import BrowseByCategory from "../components/homepage-components/BrowseByCategory";

function Home() {
  return (
    <div>
      <Mainsection />
      <Tabs />
      <Organictab />
      <HomeProductCategory />
      <TrendingProduct />
      <BrowseByCategory />
    </div>
  );
}

export default Home;
