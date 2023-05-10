import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";
import Skeleton from "./Skeleton";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  isImageLoading,
  cards,
  onCardClick,
  onCardDelete,
  onCardLike,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt={`Аватар ${currentUser.name}`}
          />
          <button
            className="profile__avatar-edit-button"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-button" onClick={onEditProfile} />
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} />
      </section>
      <section className="elements">
        <ul className="elements__table">
          {isImageLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : cards.map((card) => (
                <Card
                  key={card._id}
                  card={card}
                  link={card.link}
                  name={card.name}
                  likes={card.likes.length}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
