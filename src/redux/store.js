import { createStore, applyMiddleware } from "redux";
import cartReducer from "./cart/cartReducer";

const cartValidator = (store) => (next) => (action) => {
  const { products, carts } = store.getState();
  const selectedProduct = products?.find(
    (product) => product?.id === action?.payload?.id
  );
  const selectedCartProduct = carts?.find(
    (product) => product?.id === action?.payload?.id
  );

  if (action.type === "cart/add-to-cart" || action.type === "cart/increment") {
    if (selectedProduct?.qty > 0) {
      return next(action);
    } else {
      alert("This product out of stock");
    }
  } else {
    if (selectedCartProduct?.qty > 0) {
      return next(action);
    } else {
      alert("This product is empty from cart");
    }
  }
};
const store = createStore(cartReducer, applyMiddleware(cartValidator));

export default store;
