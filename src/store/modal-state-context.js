import { createContext } from "react";

export const ModalCartContext = createContext({
  item: undefined,
  cartItem: undefined,
  subTotal: () => {},
  onSetModal: () => {},
  onSetCartAddModal: () => {},
  onSetCartRemoveModal: () => {},
  onClose: () => {},
});
