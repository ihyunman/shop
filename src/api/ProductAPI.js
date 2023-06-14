import axios from "axios";

export default function getProducts() {
  return axios.get("/products.json").then((res) => res.data);
}
