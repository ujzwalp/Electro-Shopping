import ElectronicItem from "./ElectronicItem";

const Electronic = (props) => {
  return (
    <main className="electronic">
      {props.items.map((item) => (
        <ElectronicItem
          key={item.id}
          item={item}
          onSetModal={props.onSetModal}
          onSetCartAddModal={props.onSetCartAddModal}
          onSetCartRemoveModal={props.onSetCartRemoveModal}
        />
      ))}
      ;
    </main>
  );
};

export default Electronic;
