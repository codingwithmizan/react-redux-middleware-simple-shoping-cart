import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";
const Cart = () => {

  const { carts } = useSelector((state) => state);
  const totalItems = carts?.reduce(
    (total, currentItem) => total + currentItem?.qty,
    0
  );
  const totalPrice = carts?.reduce(
    (total, currentItem) => total + currentItem?.price * currentItem?.qty,
    0
  );

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {carts.length > 0
          ? carts.map((item) => <CartItem key={item.id} item={item} />)
          : "No cart item found"}

        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{totalItems}</p>
          </div>
        </div>
      </div>
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
};

export default Cart;
