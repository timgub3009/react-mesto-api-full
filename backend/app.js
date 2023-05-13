const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { loginValidation, userValidation } = require('./middlewares/validation');
const handelErrors = require('./errors/handelErrors');
const routes = require('./routes/index');
const { PORT, DATABASE } = require('./utils/config');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', loginValidation, login);
app.post('/signup', userValidation, createUser);

app.use(auth);
app.use(routes);

app.use(errorLogger);

app.use(errors());
app.use(handelErrors);

mongoose.connect(DATABASE);

app.listen(PORT);
