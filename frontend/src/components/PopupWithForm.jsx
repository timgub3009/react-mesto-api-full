import Popup from "./Popup";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  formName,
  onSubmit,
  children,
  isDisabled,
  submitText,
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className="popup__title">{title}</h2>
      <form
        className="popup__form"
        name={formName}
        onSubmit={onSubmit}
        noValidate
      >
        {children}
        <button
          type="submit"
          className={
            isDisabled
              ? "popup__submit-button popup__submit-button_inactive"
              : "popup__submit-button"
          }
          disabled={isDisabled}
        >
          {submitText}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
