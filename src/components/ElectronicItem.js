const ElectronicItem = (props) => {
  console.log(props.item);
  return (
    <div className="electronic-item">
      <button className="product-image-button">
        <img
          src={props.item.images[0]}
          alt="product-image"
          className="product-image"
        />
      </button>
      <div className="container">
        <div className="container1">{props.item.name}</div>
        <div className="container2">{props.item.price}</div>
        {/* <div className="container3">{props.item.description}</div>  This is disabled because it was affecting the css. later unlock it
        when designing css*/}

        <div className="container4">
          <img
            src={props.item.company}
            alt="company-image"
            className="company-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ElectronicItem;
