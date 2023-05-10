import React from "react";
import { NavLink } from "react-router-dom";
import useFormValidation from "../hooks/useFormValidation";

function Register({ onRegister }) {
  const { values, handleChange, errors, resetValidation, isValid } =
    useFormValidation({});

  React.useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  function handleSubmit(evt) {
    evt.preventDefault(evt);
    const { email, password } = values;
    onRegister(email, password);
  }

  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="login" className="login__label">
          <input
            className="login__input login__input_type_email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email || ""}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            required
          />
          <span
            id="email-error"
            className={`popup__error ${errors.email && "popup__error_active"}`}
          >
            {errors.email || ""}
          </span>
        </label>
        <label htmlFor="password" className="login__label">
          <input
            className="login__input login__input_type_password"
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            value={values.password || ""}
            onChange={handleChange}
            minLength="7"
            maxLength="14"
            required
          />
          <span
            id="password-error"
            className={`popup__error ${
              errors.password && "popup__error_active"
            }`}
          >
            {errors.password || ""}
          </span>
        </label>
        <button type="submit" className="login__button" disabled={!isValid}>
          Зарегистрироваться
        </button>
      </form>
      <p className="login__signup">
        Уже зарегистрированы?&nbsp;
        <NavLink to="/sign-in" className="login__link">
          Войти
        </NavLink>
      </p>
    </section>
  );
}

export default Register;
