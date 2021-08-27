import React from "react";
import NavbarComp from "../../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cart.module.css";
import BannerImage from "../../Assets/banner.jpg";
import { removeAll, removeFromCart } from "../../Global State/Action";
const CartPage = () => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => {
    return state.products;
  });
  return (
    <>
      <NavbarComp className={styles.navbar__cart} />
      <img src={BannerImage} alt="Banner" className={styles.banner__image} />

      <div className={styles.cart__mainDiv}>
        {Products.map((product, index) => {
          return (
            <div key={index}>
              <div className={styles.cart__imageDiv}>
                <img src={product.img} alt={product.name} />
                <div className={styles.cart__name}>
                  <h2>{product.name}</h2>
                </div>
                <div className={styles.cart__price}>{product.price}</div>
              </div>
              <div className={styles.cart__removeDiv}>
                <button
                  className={styles.cart__removeButton}
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {Products.length > 0 ? (
        <button onClick={() => dispatch(removeAll())}>Remove All</button>
      ) : null}
    </>
  );
};

export default CartPage;
