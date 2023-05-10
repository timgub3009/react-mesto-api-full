const { celebrate, Joi } = require('celebrate');
const { regex } = require('../utils/config');

const userValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(regex),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const profileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
});

const userIdValidation = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24).required(),
  }),
});

const cardIdValidation = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24).required(),
  }),
});

const avatarValidation = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(regex).required(),
  }),
});

const loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const cardValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().pattern(regex),
  }),
});

module.exports = {
  userValidation,
  profileValidation,
  userIdValidation,
  cardIdValidation,
  avatarValidation,
  loginValidation,
  cardValidation,
};
