import "./css/Side.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Side() {
  const { user, login, logout } = useAuthContext();

  return (
    <div className="side">
      <Link className="side__title" to="/">
        HYUN
      </Link>
      <ul className="side__user">
        <li>
          {!user && <Link onClick={login}>SIGN IN</Link>}
          {user && <Link onClick={logout}>LOGOUT</Link>} /{" "}
          <Link to="/cart">CART</Link>
        </li>

        {user && (
          <li>
            <Link to="/addProduct">ADD PRODUCTS</Link>
          </li>
        )}
        <li>
          <Link to="/store">STORE</Link>
        </li>
      </ul>
      <ul className="side__menu"></ul>
    </div>
  );
}
