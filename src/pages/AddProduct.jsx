import React, { useState } from "react";
import "./AddProducts.css";
import { uploadImage } from "../api/Uploader";
import Button from "../components/Button";
import useProducts from "../hooks/useProducts";

function AddProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const { addProduct } = useProducts();

  const handleSubmit = (e) => {
    e.preventDefault();

    uploadImage(file).then((url) => {
      addProduct.mutate({ product, url }, { onSuccess: () => {} });
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <div className="container">
      <div className="space"></div>
      {file && (
        <img
          className="form__img"
          src={URL.createObjectURL(file)}
          alt="local"
        />
      )}
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="file"
              accept="image/*"
              name="file"
              required
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="제품명"
              name="title"
              value={product.title ?? ""}
              required
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="가격"
              name="price"
              value={product.price ?? ""}
              required
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="카테고리"
              name="category"
              value={product.category ?? ""}
              required
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="상품설명"
              name="desc"
              value={product.desc ?? ""}
              required
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="옵션들(,)로 구분해주세요"
              name="options"
              value={product.options ?? ""}
              required
              onChange={handleChange}
            />
          </li>
        </ul>
        <Button className="small" title="등록" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default AddProduct;
