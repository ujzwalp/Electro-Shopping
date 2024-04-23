import { forwardRef, useContext } from "react";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";
import { ModalCartContext } from "../store/modal-state-context";

const CartModal = forwardRef((props, ref) => {
  const cartCtx = useContext(ModalCartContext);

  const quantityCalc = (itemId) => {
    let occurence = 0;

    cartCtx.cartItem.forEach((item) => {
      if (item.id === itemId) occurence += 1;
    });

    return occurence;
  };

  const uniqueCartItemsString = new Set(cartCtx.cartItem.map(JSON.stringify));
  const uniqueCartItems = Array.from(uniqueCartItemsString).map(JSON.parse);

  return createPortal(
    <dialog className="cartModal" ref={ref}>
      <button
        className="close-cartModal"
        onClick={(event) => {
          if (event.target.innerHTML === "close" || event.code === "Escape")
            event.target.parentElement.close();
        }}
      >
        close
      </button>
      {uniqueCartItems.map((addedItem) => (
        <CartItem
          key={addedItem.id}
          images={addedItem.images}
          itemName={addedItem.name}
          quantity={quantityCalc(addedItem.id)}
          price={addedItem.price}
        />
      ))}
      <hr />
      <div className="sub-total">
        SUBTOTAL:{" "}
        {cartCtx.subTotal.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </div>
    </dialog>,
    document.getElementById("cart-modal")
  );
});

export default CartModal;
