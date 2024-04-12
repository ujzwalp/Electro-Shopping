import React, { useEffect, useRef, useState } from "react";
import ELECT_ITEMS from "../ELEC_ITEMS";
import Header from "./Header";
import Electronic from "./Electronic";
import Footer from "./Footer";
import Modal from "./Modal";

const App = () => {
  const [modalItemState, setModalItemState] = useState();
  const dialogRef = useRef();

  const liftedModalItemhandler = (liftedItem) => {
    setModalItemState(liftedItem);
    modalHandlerOpen();
  };

  const modalHandlerOpen = () => {
    dialogRef.current.open();
  };

  const modalHandlerClose = () => {
    dialogRef.current.close();
  };

  const InitialMoalImage = (itemId) => {
    dialogRef.current.setModalImage(itemId);
  };

  return (
    <div className="app">
      <Modal
        item={modalItemState}
        ref={dialogRef}
        onClose={modalHandlerClose}
      />
      <Header />
      <Electronic
        items={ELECT_ITEMS}
        startModalImage={InitialMoalImage}
        onLiftModalItem={liftedModalItemhandler}
      />
      <Footer />
    </div>
  );
};

export default App;
