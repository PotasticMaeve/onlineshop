import React from "react";
import Slide from "./Slide";

const Content = () => {
  return (
    <div className="content">
      <div className="banner">
        <Slide />
      </div>
      <div className="category-wrap">
        <h1>Kategori Pilihan</h1>
        <div className="list">
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
          <div className="category-item"></div>
        </div>
      </div>
      <hr />
      <div className="product-wrap">
        <div className="row">
          <h1>Produk Terlaris</h1>
          <h1 className="seeall">Lihat Semua</h1>
        </div>

        <div className="list">
          <div className="product-item">
            <div className="product-photo"></div>
            <div className="product-desc"></div>
          </div>
          <div className="product-item">
            <div className="product-photo"></div>
            <div className="product-desc"></div>
          </div>
          <div className="product-item">
            <div className="product-photo"></div>
            <div className="product-desc"></div>
          </div>
          <div className="product-item">
            <div className="product-photo"></div>
            <div className="product-desc"></div>
          </div>
          <div className="product-item">
            <div className="product-photo"></div>
            <div className="product-desc"></div>
          </div>
          <div className="product-item">
            <div className="product-photo"></div>
            <div className="product-desc"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
