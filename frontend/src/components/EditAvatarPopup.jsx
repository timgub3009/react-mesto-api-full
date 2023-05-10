import React from "react";
import PopupWithForm from "./PopupWithForm";
import useFormValidation from "../hooks/useFormValidation";

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose, isLoading }) {
  const { values, errors, handleChange, resetValidation, isValid } =
    useFormValidation({});

  React.useEffect(() => {
    resetValidation();
  }, [isOpen, resetValidation]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar(values);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name={"avatar-edit"}
      formName={"avatar-form"}
      title={"Обновить аватар"}
      submitText={isLoading ? "Сохранение..." : "Сохранить"}
      isDisabled={!isValid}
    >
      <label htmlFor="avatar" className="popup__label">
        <input
          type="url"
          name="avatar"
          id="avatar"
          className={`popup__input popup__input_type_avatar ${
            errors.avatar && "popup__input_type_error"
          }`}
          value={values.avatar || ""}
          onChange={handleChange}
          placeholder="Ссылка на фото"
          required
        />
        <span
          id="avatar-error"
          className={`popup__error ${errors.avatar && "popup__error_active"}`}
        >
          {errors.avatar || ""}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
