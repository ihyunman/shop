import "./ProductCard.css";
export default function ProductCard({ product }) {
  const { id, title, price } = product;
  return (
    <li className="product">
      <img className="product__img" src={`images/products/${id}.webp`} />
      <p className="product__title">{title}</p>
      <p className="product__price">{price}</p>
    </li>
  );
}
