import ELECT_ITEMS from "../ELEC_ITEMS";

const ElectronicItem = (props) => {
  const liftModalItemHandler = (event) => {
    const [itemToLift] = ELECT_ITEMS.filter(
      (item) => item.id == event.target.parentElement.id
    );

    props.startModalImage(event.target.parentElement.id);
    props.onliftModal(itemToLift);
  };

  return (
    <div className="electronic-item" onClick={liftModalItemHandler}>
      <button className="product-image-button" id={props.item.id}>
        <img src={props.item.images[0]} className="product-image" />
      </button>
      <div className="container">
        <div className="container1">{props.item.name}</div>
        <div className="container2">Price: {props.item.price}</div>

        <div className="container4">
          <img src={props.item.company} className="company-image" />
        </div>
        <div className="quantity-button">
          <button className="decrease">-</button>
          <span className="quantity">1</span>
          <button className="increase">+</button>
        </div>
      </div>
    </div>
  );
};

export default ElectronicItem;
