import { useNavigate } from "react-router-dom";
import "./css/ProductCard.css";
export default function ProductCard({ product }) {
  const { id, title, price, image } = product;
  const navigator = useNavigate();
  const handleClick = () => {
    navigator(`/detail/${id}`, { state: product });
  };

  return (
    <li className="product" onClick={handleClick}>
      <img className="product__img" src={image} />
      <p className="product__title">{title}</p>
      <p className="product__price">₩{price.toLocaleString()}</p>
    </li>
  );
}
