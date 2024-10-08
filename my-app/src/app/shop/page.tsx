"use client";

import React from "react";
import Layouts from "../_layouts/layout";
import Shopimg from "../_components/shopimg";
import Shopdata from "../_components/shopdata";
import Newletter from "../_components/newletter";

const Shop = () => {
  return (
    <Layouts>
      <main>
        <Shopimg />
        <Shopdata />
        <Newletter />
      </main>
    </Layouts>
  );
};

export default Shop;
