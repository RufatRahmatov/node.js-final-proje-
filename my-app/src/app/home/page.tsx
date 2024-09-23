import React from "react";
import Layouts from "../_layouts/layout";
import Slider from "../_components/slider/slider";
import Cards from "../_components/cards/card";
import Populyar from "../_components/populyar/populyar";
import TrendyCollection from "../_components/trendcollection/trendcollection";
export const Home = () => {
  return (
    <Layouts>
      <main>
        <Slider />
        <Cards />
        <Populyar />
        <TrendyCollection />
      </main>
    </Layouts>
  );
};

export default Home;
