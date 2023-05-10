import React from "react";
import PopupWithForm from "./PopupWithForm";
import useFormValidation from "../hooks/useFormValidation";

function AddPlacePopup({ isOpen, onAddPlace, onClose, isLoading }) {
  const { values, errors, handleChange, resetValidation, isValid } =
    useFormValidation({});

  React.useEffect(() => {
    resetValidation();
  }, [isOpen, resetValidation]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace(values);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name={"add"}
      formName={"card-form"}
      title={"Новое место"}
      submitText={isLoading ? "Создание..." : "Создать"}
      isDisabled={!isValid}
    >
      <label htmlFor="title" className="popup__label">
        <input
          type="text"
          name="title"
          id="title"
          className={`popup__input popup__input_type_place ${
            errors.title && "popup__input_type_error"
          }`}
          placeholder="Название"
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={values.title || ""}
          required
        />
        <span
          id="title-error"
          className={`popup__error ${errors.title && "popup__error_active"}`}
        >
          {errors.title || ""}
        </span>
      </label>
      <label htmlFor="link" className="popup__label">
        <input
          type="url"
          name="link"
          id="link"
          className={`popup__input popup__input_type_link ${
            errors.link && "popup__input_type_error"
          }`}
          placeholder="Ссылка на картинку"
          onChange={handleChange}
          value={values.link || ""}
          required
        />
        <span
          id="link-error"
          className={`popup__error ${errors.link && "popup__error_active"}`}
        >
          {errors.link || ""}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
