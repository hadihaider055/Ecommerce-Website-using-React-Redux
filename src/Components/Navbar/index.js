import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const NavbarComp = () => {
  const products = useSelector((state) => {
    return state.products;
  });
  const history = useHistory();
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <Link to="/" className={styles.navbar__brandLink}>
            Ecommerce-Website
          </Link>
        </div>
        <div className={styles.navbar__searchBar}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.navbar__search}
          />
          <Search className={styles.search__icon} />
        </div>
        <div
          className={styles.navbar__cart}
          onClick={() => history.push("/cart")}
        >
          <ShoppingCart className={styles.cart__icon} />
          <span className={styles.cart__span}>{products.length}</span>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
