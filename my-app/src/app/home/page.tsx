import React from "react";
import Layouts from "../_layouts/layout";
import Slider from "../_components/slider/slider";
import Cards from "../_components/cards/card";
import Populyar from "../_components/populyar/populyar";
import TrendyCollection from "../_components/trendcollection/trendcollection";
import Follow from "../_components/follow";
import Newletter from "../_components/newletter";
import Findstore from "../_components/findstore";
import Autumncolletion from "../_components/autumncollection";
import Shopnow from "../_components/shopnow";
import Featureproduct from "../_components/featureproduct";
import Customer from "../_components/customer";
import Readjournal from "../_components/readjournal";

export const Home = () => {
  return (
    <Layouts>
      <main>
        <Slider />
        <Cards />
        <Populyar />
        <TrendyCollection />
        <Findstore />
        <Autumncolletion />
        <Shopnow />
        <Featureproduct />
        <Customer />
        <Readjournal />
        <Follow />
        <Newletter />
      </main>
    </Layouts>
  );
};

export default Home;
