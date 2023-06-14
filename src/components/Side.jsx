import "./Side.css";
import { Link } from "react-router-dom";

export default function Side() {
  return (
    <div className="side">
      <Link className="side__title">HYUN</Link>
      <ul className="side__user">
        <li>
          <Link>SIGN IN</Link> / <Link>CART</Link>
        </li>
        <li>
          <Link>MYPAGE</Link>
        </li>
      </ul>
      <ul className="side__menu">
        <li>
          <Link>ABOUT</Link>
        </li>
        <li>
          <Link to="/store">STORE</Link>
        </li>
        <li>
          <Link>Q&A</Link>
        </li>
      </ul>
    </div>
  );
}
