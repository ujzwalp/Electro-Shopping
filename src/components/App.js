import React, { useRef, useState, useMemo } from "react";
import ELECT_ITEMS from "../ELEC_ITEMS";
import Header from "./Header";
import Electronic from "./Electronic";
import Footer from "./Footer";
import Modal from "./Modal";
import { ModalCartContext } from "../store/modal-state-context";

const App = () => {
  const [modalItemState, setModalItemState] = useState();
  const [cartState, setCartState] = useState([]);
  const dialogRef = useRef();

  const openModalHanlder = (liftedItem) => {
    setModalItemState(liftedItem);
    dialogRef.current.setModalImage(liftedItem.id);
    dialogRef.current.open();
  };

  const modalHandlerClose = (event) => {
    if (event.target.innerHTML === "close" || event.code === "Escape")
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
      for (
        let updateProductQuantity = 1;
        updateProductQuantity <= occurence - 1;
        updateProductQuantity++
      ) {
        cartStateUpdate.push(cartProductInfo);
      }

      setCartState([...cartStateUpdate]);
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

  const appCtxValue = {
    item: modalItemState,
    cartItem: cartState,
    subTotal: subTotalCalc(),
    onSetModal: openModalHanlder,
    onSetCartAddModal: addItemToCart,
    onSetCartRemoveModal: removeItemFromCart,
    onClose: modalHandlerClose,
  };

  return (
    <ModalCartContext.Provider value={appCtxValue}>
      <div className="app">
        <Modal ref={dialogRef} />
        <Header />
        <Electronic items={ELECT_ITEMS} />
        <Footer />
      </div>
    </ModalCartContext.Provider>
  );
};

export default App;
