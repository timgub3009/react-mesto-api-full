import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({
  card,
  onCardClick,
  onCardLike,
  onCardDelete,
  link,
  name,
  likes,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `elements__like-button ${
    isLiked && "elements__like-button_type_active"
  }`;

  const cardDeleteButtonClassName = `elements__delete-button ${
    !isOwn && "elements__delete-button_type_hidden"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="elements__card">
      <img
        className="elements__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      />
      <div className="elements__info">
        <h2 className="elements__card-heading">{name}</h2>
        <div className="elements__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <p className="elements__like-counter">{likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
