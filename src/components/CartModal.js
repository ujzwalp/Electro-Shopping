import { forwardRef, useState } from "react";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";

const CartModal = forwardRef((props, ref) => {
  const quantityCalc = (itemId) => {
    let occurence = 0;

    props.cartItem.forEach((item) => {
      if (item.id === itemId) occurence += 1;
    });

    return occurence;
  };

  const uniqueCartItemsString = new Set(props.cartItem.map(JSON.stringify));
  const uniqueCartItems = Array.from(uniqueCartItemsString).map(JSON.parse);

  return createPortal(
    <dialog className="cartModal" ref={ref}>
      <button
        className="close-cartModal"
        onClick={(event) => event.target.parentElement.close()}
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
        {props.subTotal.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </div>
    </dialog>,
    document.getElementById("cart-modal")
  );
});

export default CartModal;
