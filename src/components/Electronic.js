import ElectronicItem from "./ElectronicItem";

const Electronic = (props) => {
  return (
    <main className="electronic">
      {props.items.map((item) => (
        <ElectronicItem
          key={item.id}
          item={item}
          onliftModal={props.onLiftModalItem}
          startModalImage={props.startModalImage}
        />
      ))}
      ;
    </main>
  );
};

export default Electronic;
