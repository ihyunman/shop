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
    products &&
      products.map(
        (product) => (price = price + product.price * product.quantity)
      );
    setPrice(price);
  }, [products]);

  return (
    <div className="container">
      <div className="space"></div>
      <div className="cart">
        <ul className="cart__list">
          {products &&
            products.map((product) => (
              <CartItem key={product.id} product={product} uid={user.uid} />
            ))}
        </ul>

        <ul className="cart__total">
          <li className="cart__total--title">
            <span>총 상품금액</span>
            <span id="price">{price.toLocaleString()}</span>
          </li>
          <li>
            <span></span>
            <span> + </span>
          </li>
          <li>
            <span>배송비</span>
            <span>3,000</span>
          </li>
          <li>
            <span></span>
            <span> = </span>
          </li>
          <li>
            <span>합계</span>
            <span>{(price + 3000).toLocaleString()}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
