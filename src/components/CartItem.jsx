import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { addOrUpdateToCart, removeCart } from "../api/Firebase";
import "./CartItem.css";
function CartItem({ product, uid }) {
  const handleUpdate = (value) => {
    if (value === -1 && product.quantity === 1) return;
    addOrUpdateToCart(uid, { ...product, quantity: product.quantity + value });
  };

  const handleDelete = () => removeCart(uid, product.id);

  return (
    <li key={product.id} className="cart__item">
      <img src={product.image} width="100px" />
      <span className="cart__item--title">
        {product.title}({product.options})
      </span>
      <span className="cart__item--price">
        ₩{product.price.toLocaleString()}
      </span>
      <span className="cart__item--quantity">
        <AiOutlineMinus
          className="update__btn"
          onClick={() => handleUpdate(-1)}
        />{" "}
        {product.quantity}{" "}
        <AiOutlinePlus
          className="update__btn"
          onClick={() => handleUpdate(1)}
        />{" "}
      </span>
      <BsTrash className="cart__item--delBtn" onClick={handleDelete} />
    </li>
  );
}

export default CartItem;
