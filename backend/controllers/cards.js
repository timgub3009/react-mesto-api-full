const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const { OK } = require('../utils/config');
const Card = require('../models/card');

const getCards = (req, res, next) => {
  Card.find({})
    .populate(['owner', 'likes'])
    .then((cards) => {
      res.send({ data: cards });
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => card.populate('owner'))
    .then((card) => {
      res.status(OK).send({ data: card });
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  Card.findById(cardId)
    .orFail(() => {
      throw new NotFoundError('Нет карточки по заданному id');
    })
    .then((card) => {
      if (!card.owner.equals(req.user._id)) {
        throw new ForbiddenError('Нельзя удалить чужую карточку');
      } else {
        return Card.deleteOne(card).then(() => res.send({ data: card }));
      }
    })
    .catch(next);
};

const handleLikes = (req, res, data, next) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(cardId, data, { new: true })
    .orFail(() => {
      throw new NotFoundError('Нет карточки по заданному id');
    })
    .populate(['owner', 'likes'])
    .then((likes) => {
      res.send({ data: likes });
    })
    .catch(next);
};

const likeCard = (req, res, next) => {
  const data = { $addToSet: { likes: req.user._id } };
  handleLikes(req, res, data, next);
};

const deleteCardLike = (req, res, next) => {
  const data = { $pull: { likes: req.user._id } };
  handleLikes(req, res, data, next);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  deleteCardLike,
};
