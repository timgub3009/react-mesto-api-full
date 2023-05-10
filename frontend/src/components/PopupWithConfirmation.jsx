import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation({ card, onDelete, isOpen, onClose, isLoading }) {
  function handleSubmit(evt) {
    evt.preventDefault();

    onDelete(card);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      submitText={isLoading ? "Удаление..." : "Да"}
      formName={"removal-form"}
      name={"confirm-removal"}
      title={"Вы уверены?"}
      onSubmit={handleSubmit}
    />
  );
}

export default PopupWithConfirmation;
