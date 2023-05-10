import { useEffect } from "react";

function Popup({ isOpen, onClose, name, children }) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeByEsc = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEsc);

    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, [isOpen, onClose]);

  const handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <section
      className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}
      onClick={handleOverlay}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
      </div>
    </section>
  );
}

export default Popup;
