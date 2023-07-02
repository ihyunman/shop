import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/Firebase";

import "./Cart.css";
import CartItem from "../components/CartItem";
function Cart() {
  const { user } = useAuthContext();
  const { data: products } = useQuery(["carts"], () => getCart(user.uid));
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    products && products.map((product) => (price = price + product.price));
    setPrice(price);
  }, [products]);

  return (
    <div className="container">
      <div className="space"></div>
      <div className="cart">
        <h1>CART</h1>
        <ul className="cart__list">
          {products &&
            products.map((product) => (
              <CartItem key={product.id} product={product} uid={user.uid} />
            ))}
        </ul>
        <div className="cart__total">
          <div className="cart__total--title">
            <span>총 상품금액</span>
            <span></span>
            <span>배송비</span>
            <span></span>
            <span>합계</span>
          </div>
          <div className="cart__total--price">
            <span id="price">{price}</span>
            <span> + </span>

            <span id="delivery">3000</span>
            <span> = </span>
            <span> {price + 3000} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
