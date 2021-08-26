import React from "react";
import NavbarComp from "../../Components/Navbar";
import ProductsComp from "../../Components/Products";
import BannerImage from "../../Assets/banner.jpg";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div>
      <NavbarComp />
      <img src={BannerImage} alt="Banner" className={styles.banner__image} />
      <ProductsComp />
    </div>
  );
};

export default HomePage;
