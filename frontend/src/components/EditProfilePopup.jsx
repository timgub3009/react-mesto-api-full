import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useFormValidation from "../hooks/useFormValidation";

function EditProfilePopup({ isOpen, onUpdateUser, onClose, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, handleChange, setValues, resetValidation, isValid } =
    useFormValidation({});

  React.useEffect(() => {
    resetValidation();
    if (currentUser) {
      setValues(currentUser);
    }
  }, [isOpen, currentUser, setValues, resetValidation]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser(values);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={"edit"}
      formName={"profile-form"}
      title={"Редактировать профиль"}
      submitText={isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <label htmlFor="name" className="popup__label">
        <input
          type="text"
          id="name"
          name="name"
          className={`popup__input popup__input_type_name ${
            errors.name && "popup__input_type_error"
          }`}
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <span
          className={`popup__error ${errors.name && "popup__error_active"}`}
        >
          {errors.name || ""}
        </span>
      </label>
      <label htmlFor="about" className="popup__label">
        <input
          type="text"
          id="about"
          name="about"
          className={`popup__input popup__input_type_job ${
            errors.about && "popup__input_type_error"
          }`}
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          value={values.about || ""}
          onChange={handleChange}
          required
        />
        <span
          id="about-error"
          className={`popup__error ${errors.about && "popup__error_active"}`}
        >
          {errors.about || ""}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
