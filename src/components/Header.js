import electron from "../../assets/companyLogoResize.png";
import cart from "../../assets/cartImageResize.png";
import CartModal from "./CartModal";
import { useRef } from "react";

const Header = (props) => {
  const cartRef = useRef();

  // return (
  //   <header>
  //     <CartModal
  //       cartItem={props.cartItem}
  //       subTotal={props.subTotal}
  //       ref={cartRef}
  //     />
  //     <span>
  //       <img src={electron} alt="" className="logo" />
  //       <span className="company-name">Electro</span>
  //     </span>
  //     <button
  //       className="cart-button"
  //       onClick={() => cartRef.current.showModal()}
  //     >
  //       <span className="cart-quantity">{props.cartItem?.length}</span>
  //       <img src={cart} alt="cart" className="cart-image" />
  //     </button>
  //   </header>
  // );

  return (
    <header className="headerFlex">
      <CartModal
        cartItem={props.cartItem}
        subTotal={props.subTotal}
        ref={cartRef}
      />
      <div>
        <img src={electron} alt="" className="logo" />
        <p className="company-name">Electro</p>
      </div>
      <button
        className="cart-button"
        onClick={() => cartRef.current.showModal()}
      >
        <p className="cart-quantity">{props.cartItem?.length}</p>
        <img src={cart} alt="cart" className="cart-image" />
      </button>
    </header>
  );
};

export default Header;
