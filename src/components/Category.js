import React from "react";
import Shoes from "../images/shoes.png";

const Category = () => {
  return (
    <div className="category-wrap">
      <h1>Kategori Pilihan</h1>
      <div className="list">
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Kesehatan</h1>
          </div>
        </div>
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Otomotif</h1>
          </div>
        </div>
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Perawatan Tubuh</h1>
          </div>
        </div>
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Aksesoris</h1>
          </div>
        </div>
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Gadget</h1>
          </div>
        </div>
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Sandal & Sepatu</h1>
          </div>
        </div>
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Alat Tulis</h1>
          </div>
        </div>
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Alat Dapur</h1>
          </div>
        </div>
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Perlengkapan Bayi</h1>
          </div>
        </div>
        <div className="category-item">
          <div className="category-photo">
            <img
              src={Shoes}
              alt="Shoes"
              style={{ height: "3rem", widht: "auto" }}
            />
          </div>
          <div className="category-desc">
            <h1>Makanan Ringan</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
