import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import ELECT_ITEMS from "../ELEC_ITEMS";
import { createPortal } from "react-dom";

const Modal = forwardRef((props, ref) => {
  const [imageSourceState, setImageSourceState] = useState();
  const diaglogRefChange = useRef();

  const length = props.item?.images.length;

  const imageValRef = useRef(1);

  useImperativeHandle(ref, () => {
    return {
      open() {
        diaglogRefChange.current.showModal();
      },
      close() {
        setImageSourceState();
        diaglogRefChange.current.close();
      },
      setModalImage(id) {
        const [updateImageState] = ELECT_ITEMS.filter((item) => item.id == id);

        setImageSourceState(updateImageState.images[0]);
      },
    };
  });

  const changeImageHandler = (event) => {
    if (event.target.innerHTML === "&lt;") {
      imageValRef.current -= 1;
      if (imageValRef.current < 0) imageValRef.current = length - 1;
      setImageSourceState(props.item.images[imageValRef.current]);
    }

    if (event.target.innerHTML === "&gt;") {
      imageValRef.current += 1;
      if (imageValRef.current >= length) imageValRef.current = 0;
      setImageSourceState(props.item.images[imageValRef.current]);
    }
  };

  return createPortal(
    <dialog className="modal" ref={diaglogRefChange}>
      <button
        className="close"
        onClick={props.onClose}
        onKeyDown={props.onClose}
      >
        close
      </button>
      <div className="flex-mdoal">
        <button className="left slide pos-child" onClick={changeImageHandler}>
          &lt;
        </button>
        <img
          src={imageSourceState}
          alt="modal-images"
          className="item-image pos-child"
        />
        <button className="right slide pos-child" onClick={changeImageHandler}>
          &gt;
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
