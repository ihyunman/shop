import React, { useState } from "react";
import "./ProductDetail.css";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart } from "../api/Firebase";
function ProductDetail() {
  const product = useLocation().state;
  const { title, price, image, options, desc } = product;

  const [select, setSelect] = useState(options[0]);
  const { user } = useAuthContext();

  const handleClick = () => {
    addOrUpdateToCart(user.uid, { ...product, options: select, quantity: 1 });
  };

  return (
    <div className="container">
      <div className="space"></div>
      <div className="detail">
        <img className="detail__img" src={image} />
        <ul className="detail__info">
          <h1 className="detail__info--title">{title.toUpperCase()}</h1>
          <li className="detail__info--price">₩{price.toLocaleString()}</li>
          <li className="detail__info--desc">{desc}</li>
          <li className="detail__info--size">
            <label htmlFor="option" className="label">
              옵션 :
            </label>
            <select
              id="option"
              className="options"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option.toUpperCase()}
                </option>
              ))}
            </select>
          </li>
          <Button size="big" title="ADD CART" onClick={handleClick} />
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;