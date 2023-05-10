import Popup from "./Popup";

function ImagePopup({ isOpen, onClose, card }) {
  return (
    <Popup isOpen={isOpen} name={"closeup"} onClose={onClose}>
      <img
        className="popup__image"
        src={card && card.link}
        alt={card && card.name}
      />
      <figcaption className="popup__figcaption">{card && card.name}</figcaption>
    </Popup>
  );
}

export default ImagePopup;
