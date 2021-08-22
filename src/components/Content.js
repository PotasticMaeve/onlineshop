import React from "react";
import Slide from "./Slide";
import Category from "./Category";
import Product from "./Product";
import CustomCategory from "./CustomCategory";

const Content = () => {
  return (
    <div className="content">
      <div className="banner">
        <Slide />
      </div>
      <Category />
      <hr />
      <Product />
      <hr className="big-separate" />
      <CustomCategory />
      <div className="clearfix"></div>
    </div>
  );
};

export default Content;
