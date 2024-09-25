"use client";

import React from "react";
import Layouts from "../_layouts/layout";
import Shopimg from "../_components/shopimg";
import Shopdata from "../_components/shopdata";

const Shop = () => {
  return (
    <Layouts>
      <main>
        <Shopimg />
        <Shopdata />
      </main>
    </Layouts>
  );
};

export default Shop;
