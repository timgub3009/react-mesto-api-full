import React from "react";
import useFormValidation from "../hooks/useFormValidation";
import { Navigate } from "react-router-dom";

function Login({ onLogin, loggedIn }) {
  const { values, handleChange, errors, resetValidation, isValid } =
    useFormValidation({});

  React.useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  function handleSubmit(evt) {
    evt.preventDefault(evt);
    const { email, password } = values;
    onLogin(email, password);
  }

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login__label">
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
            className={`login__error ${errors.email && "login__error_active"}`}
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
            className={`login__error ${
              errors.password && "login__error_active"
            }`}
          >
            {errors.password || ""}
          </span>
        </label>
        <button type="submit" className="login__button" disabled={!isValid}>
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
