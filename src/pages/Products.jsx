import ProductCard from "../components/ProductCard";
import "./Products.css";
import useProducts from "../hooks/useProducts";
export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <div className="container">
      <div className="space"></div>
      <ul className="products">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
