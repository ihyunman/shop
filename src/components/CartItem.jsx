import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { addOrUpdateToCart, removeCart } from "../api/Firebase";

function CartItem({ product, uid }) {
  const handleUpdate = (value) => {
    if (value === -1 && product.quantity === 1) return;
    addOrUpdateToCart(uid, { ...product, quantity: product.quantity + value });
  };

  const handleDelete = () => removeCart(uid, product.id);

  return (
    <li key={product.id} className="cart__item">
      <img src={product.image} width="100px" />
      <span>{product.title}</span>
      <span>₩{product.price.toLocaleString()}</span>
      <span>
        <AiOutlineMinus onClick={() => handleUpdate(-1)} /> {product.quantity}{" "}
        <AiOutlinePlus onClick={() => handleUpdate(1)} />{" "}
      </span>
      <BsTrash onClick={handleDelete} />
    </li>
  );
}

export default CartItem;
