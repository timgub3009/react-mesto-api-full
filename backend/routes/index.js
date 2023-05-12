const router = require('express').Router();
const userRouter = require('./users');
const cardRouter = require('./cards');
const crashTestRouter = require('./crashTest');
const NotFoundError = require('../errors/NotFoundError');

router.use('/crash-test', crashTestRouter);
router.use('/users', userRouter);
router.use('/cards', cardRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

module.exports = router;
