import electron from "../../assets/electron.png";
import cart from "../../assets/cart2.png";

const Header = () => {
  return (
    <header>
      <span>
        <img src={electron} alt="" className="logo" />
        <span className="company-name">Electro</span>
      </span>
      <button className="cart-button">
        <span className="cart-quantity">9</span>
        <img src={cart} alt="cart" className="cart-image" />
      </button>
    </header>
  );
};

export default Header;
