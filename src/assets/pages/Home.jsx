import React from "react";
import Mainsection from "../components/homepage-components/Mainsection";
import Tabs from "../components/homepage-components/Tabs";
import Organictab from "../components/homepage-components/Organictab";
import HomeProductCategory from "../components/homepage-components/HomeProductCategory";
import TrendingProduct from "../components/homepage-components/TrendingProduct";
import BrowseByCategory from "../components/homepage-components/BrowseByCategory";
import ReviewSection from "../components/homepage-components/ReviewSection";
import NewsSection from "../components/homepage-components/NewsSection";

function Home() {
  return (
    <div>
      <Mainsection />
      <Tabs />
      <HomeProductCategory />
      <TrendingProduct />
      <BrowseByCategory />
      {/* <Organictab />
      <ReviewSection/>
      <NewsSection/> */}
    </div>
  );
}

export default Home;
