import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector(state => state.users)

  return (
    <header className={classes.header}>
      <div className={classes["header-links"]}>
        <li className={classes["header-link"]}>
          <Link to="/register">SignUp</Link>
        </li>
        <li className={classes["header-link"]}>
          <Link to="/login">SignIn</Link>
        </li>
        <h2>{user.name} logged in</h2>
      </div>
    </header>
  );
};

export default Header;
