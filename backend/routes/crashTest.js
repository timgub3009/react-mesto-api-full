const crashTestRouter = require('express').Router;

crashTestRouter.get('/', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

module.exports = crashTestRouter;
