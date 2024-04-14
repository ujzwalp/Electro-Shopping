import electron from "../../assets/electron.png";
import cart from "../../assets/cart2.png";
import CartModal from "./CartModal";
import { useRef } from "react";

const Header = (props) => {
  const cartRef = useRef();

  return (
    <header>
      <CartModal
        cartItem={props.cartItem}
        subTotal={props.subTotal}
        ref={cartRef}
      />
      <span>
        <img src={electron} alt="" className="logo" />
        <span className="company-name">Electro</span>
      </span>
      <button
        className="cart-button"
        onClick={() => cartRef.current.showModal()}
      >
        <span className="cart-quantity">{props.cartItem?.length}</span>
        <img src={cart} alt="cart" className="cart-image" />
      </button>
    </header>
  );
};

export default Header;
