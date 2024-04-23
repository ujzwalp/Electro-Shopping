import { useContext } from "react";
import ELECT_ITEMS from "../ELEC_ITEMS";
import { ModalCartContext } from "../store/modal-state-context";

const ElectronicItem = (props) => {
  const electronicCtx = useContext(ModalCartContext);
  const itemModalHandler = (event) => {
    const [itemToLift] = ELECT_ITEMS.filter(
      (item) => item.id == event.target.parentElement.id
    );
    electronicCtx.onSetModal(itemToLift);
  };

  const simulateProductInfoHandler = (event) => {
    const eventId = event.target.id.slice(0, -3);

    const [itemToLift] = ELECT_ITEMS.filter((item) => item.id == eventId);

    if (event.target.id.slice(-3) === "inc") {
      electronicCtx.onSetCartAddModal({
        operation: event.target.id.slice(-3),
        ...itemToLift,
      });
    }

    if (event.target.id.slice(-3) === "dec") {
      electronicCtx.onSetCartRemoveModal({
        operation: event.target.id.slice(-3),
        ...itemToLift,
      });
    }
  };

  return (
    <div className="electronic-item" id={props.item.id}>
      {/* <button className="product-image-button" > */}
      <img
        src={props.item.images[0]}
        className="product-image"
        onClick={itemModalHandler}
      />
      {/* </button> */}
      <div className="container">
        <div className="container1 childBox">{props.item.name}</div>
        <div className="container2 childBox">Price: ₹{props.item.price}</div>

        <div className="container3 childBox">
          <img src={props.item.company} className="company-image" />
        </div>
        <div className="quantity-button childBox">
          <button
            className="decrease set-quantity"
            onClick={simulateProductInfoHandler}
            id={`${props.item.id}dec`}
          >
            -
          </button>
          <span className="quantity">1</span>
          <button
            className="increase set-quantity"
            onClick={simulateProductInfoHandler}
            id={`${props.item.id}inc`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectronicItem;
