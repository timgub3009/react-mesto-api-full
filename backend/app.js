const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(requestLogger);

app.post('/signin', loginValidation, login);
app.post('/signup', userValidation, createUser);

app.use(auth);
app.use(routes);

app.use(errorLogger);

app.use(errors());
app.use(handelErrors);

app.listen(PORT);

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
});
