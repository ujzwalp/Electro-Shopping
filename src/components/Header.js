import electron from "../../assets/companyLogoResize.png";
import cart from "../../assets/cartImageResize.png";
import CartModal from "./CartModal";
import { useRef, useContext } from "react";
import { ModalCartContext } from "../store/modal-state-context";

const Header = (props) => {
  const cartRef = useRef();
  const cartCtx = useContext(ModalCartContext);

  return (
    <header className="headerFlex">
      <CartModal ref={cartRef} />
      <div>
        <img src={electron} alt="" className="logo" />
        <p className="company-name">Electro</p>
      </div>
      <button
        className="cart-button"
        onClick={() => cartRef.current.showModal()}
      >
        <p className="cart-quantity">{cartCtx.cartItem?.length}</p>
        <img src={cart} alt="cart" className="cart-image" />
      </button>
    </header>
  );
};

export default Header;
