import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function Header({ email, loggedIn, onSignOut, title, link }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <nav className="header__nav">
        <p className="header__login">{email}</p>
        {loggedIn ? (
          <button className="header__button" onClick={onSignOut}>
            {title}
          </button>
        ) : (
          <NavLink to={link} className="header__link">
            {title}
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
