import React from "react";
import yes from "../images/yes.svg";
import no from "../images/no.svg";
import Popup from "./Popup";

function InfoTooltip({ isOpen, onClose, isSignedUp }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} name={"infotooltip"}>
      {isSignedUp ? (
        <>
          <img
            className="popup__sign"
            src={yes}
            alt="Регистрация успешно завершена"
          />
          <h2 className="popup__status">Вы успешно зарегистрировались!</h2>
        </>
      ) : (
        <>
          <img className="popup__sign" src={no} alt="Регистрация не удалась" />
          <h2 className="popup__status">
            Что-то пошло не так! Попробуйте ещё раз
          </h2>
        </>
      )}
    </Popup>
  );
}

export default InfoTooltip;
