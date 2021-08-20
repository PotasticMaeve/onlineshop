import React from "react";
import { IoPhonePortraitOutline, IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="line-info">
        <div>
          <IoPhonePortraitOutline />
          <p>Download Online Shop App</p>
        </div>
        <div>
          <p>Tentang Online Shop</p>
          <p>Mitra Online Shop</p>
          <p>Mulai Berjualan</p>
          <p>Promo</p>
          <p>Online Shop Care</p>
        </div>
      </div>
      <div className="navbar">
        <div>
          <h1>olshop</h1>
        </div>
        <div>
          <p>Kategori</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Cari Alat Masak" />
          <div className="search-button">
            <IoSearch color={"#9FA6B0"} />
          </div>
        </div>
        <div className="cart">
          <FaShoppingCart color={"#6C727C"} size={18} />
        </div>
        <div className="separator"></div>
        <div className="authentication">
          <div className="button">
            <p>Daftar</p>
          </div>
          <div className="button-block">
            <p>Masuk</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
