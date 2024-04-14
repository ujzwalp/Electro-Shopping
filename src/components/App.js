import React, { useRef, useState } from "react";
import ELECT_ITEMS from "../ELEC_ITEMS";
import Header from "./Header";
import Electronic from "./Electronic";
import Footer from "./Footer";
import Modal from "./Modal";

const App = () => {
  const [modalItemState, setModalItemState] = useState();
  const [cartState, setCartState] = useState([]);
  const dialogRef = useRef();

  const openModalHanlder = (liftedItem) => {
    setModalItemState(liftedItem);
    dialogRef.current.setModalImage(liftedItem.id);
    dialogRef.current.open();
  };

  const modalHandlerClose = () => {
    dialogRef.current.close();
  };

  const addItemToCart = (cartProductInfo) => {
    setCartState((prevState) => {
      return [...prevState, cartProductInfo];
    });
  };

  const removeItemFromCart = (cartProductInfo) => {
    let occurence = 0;

    cartState.forEach((item) => {
      if (item.id === cartProductInfo.id) occurence += 1;
    });

    if (occurence > 1) {
      const cartStateUpdate = cartState.filter(
        (item) => item.id !== cartProductInfo.id
      );
      setCartState([...cartStateUpdate, cartProductInfo]);
    } else if (occurence === 1) {
      const cartStateUpdate = cartState.filter(
        (item) => item.id !== cartProductInfo.id
      );
      setCartState(cartStateUpdate);
    } else {
      return;
    }
  };

  const subTotalCalc = () => {
    let subTotal = 0;

    if (cartState) {
      cartState.forEach(
        (item) => (subTotal += Number(item.price.replaceAll(",", "")))
      );
    }

    return subTotal;
  };

  return (
    <div className="app">
      <Modal
        item={modalItemState}
        ref={dialogRef}
        onClose={modalHandlerClose}
      />
      <Header cartItem={cartState} subTotal={subTotalCalc()} />
      <Electronic
        items={ELECT_ITEMS}
        onSetModal={openModalHanlder}
        onSetCartAddModal={addItemToCart}
        onSetCartRemoveModal={removeItemFromCart}
      />
      <Footer />
    </div>
  );
};

export default App;
