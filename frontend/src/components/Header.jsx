import classes from "./header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-links"]}>
        <li className={classes["header-link"]}>
          <Link to="/login">SignUp</Link>
        </li>
        <li className={classes["header-link"]}>
          <Link to="/register">SignIn</Link>
        </li>
      </div>
    </header>
  );
};

export default Header;
