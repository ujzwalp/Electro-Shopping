const CartItem = (props) => {
  return (
    <div className="cart-item flex-container">
      <div className="cart-product-image flex-1">
        <img src={props.images[0]} className="cartItem-image" />
      </div>
      <div className="cart-product-name flex-2 flex cartItemName">
        {props.itemName}
      </div>
      <div className="cart-product-quantity flex-3 flex">{props.quantity}</div>
      <div className="cart-product-price flex-4 flex">₹{props.price}</div>
    </div>
  );
};

export default CartItem;
