import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import styles from "./products.module.css";
import { ProductsData } from "./productsData";
import { useDispatch } from "react-redux";

const ProductsComp = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className={styles.products__mainHeading}>Products</h2>
      <div className={styles.products__mainDiv}>
        {ProductsData.map((product) => {
          return (
            <div className={styles.products__card} key={product.name}>
        
              <div className={styles.products__cardHeader}>
                <h5 className={styles.products__heading}>{product.name}</h5>
              </div>
              <div className={styles.products__cardBody}>
                <img src={product.img} alt={product.name} />
              </div>
              <div className={styles.products__cardFooter}>
                <span
                  className={styles.card__span}
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                >
                  <ShoppingCart className={styles.products__cart} />
                  Add to Cart
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsComp;
