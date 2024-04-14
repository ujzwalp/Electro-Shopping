import ELECT_ITEMS from "../ELEC_ITEMS";

const ElectronicItem = (props) => {
  const itemModalHandler = (event) => {
    const [itemToLift] = ELECT_ITEMS.filter(
      (item) => item.id == event.target.parentElement.id
    );
    props.onSetModal(itemToLift);
  };

  const simulateProductInfoHandler = (event) => {
    const eventId = event.target.id.slice(0, -3);

    const [itemToLift] = ELECT_ITEMS.filter((item) => item.id == eventId);

    if (event.target.id.slice(-3) === "inc") {
      props.onSetCartAddModal({
        operation: event.target.id.slice(-3),
        ...itemToLift,
      });
    }

    if (event.target.id.slice(-3) === "dec") {
      props.onSetCartRemoveModal({
        operation: event.target.id.slice(-3),
        ...itemToLift,
      });
    }
  };

  return (
    <div className="electronic-item">
      <button className="product-image-button" id={props.item.id}>
        <img
          src={props.item.images[0]}
          className="product-image"
          onClick={itemModalHandler}
        />
      </button>
      <div className="container">
        <div className="container1">{props.item.name}</div>
        <div className="container2">Price: ₹{props.item.price}</div>

        <div className="container4">
          <img src={props.item.company} className="company-image" />
        </div>
        <div className="quantity-button">
          <button
            className="decrease"
            onClick={simulateProductInfoHandler}
            id={`${props.item.id}dec`}
          >
            -
          </button>
          <span className="quantity">1</span>
          <button
            className="increase"
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
