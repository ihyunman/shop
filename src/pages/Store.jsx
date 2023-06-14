import { useQuery } from "@tanstack/react-query";
import getProducts from "../api/ProductAPI";
import ProductCard from "../components/ProductCard";
import "./Store.css";
export default function Store() {
  const { data: products } = useQuery(["products"], getProducts);
  console.log(products);
  return (
    <>
      <ul className="products">{products && products.map((product) => <ProductCard product={product} />)}</ul>
    </>
  );
}
