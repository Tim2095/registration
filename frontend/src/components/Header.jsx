import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((state) => state.users);

  return (
    <header className={classes.header}>
      <div className={classes["header-links"]}>
        <li className={classes["header-link"]}>
          <Link to="/register">SignUp</Link>
        </li>
        {!user.username && <li className={classes["header-link"]}>
          <Link to="/login">SignIn</Link>
        </li>}
        {user && user.username && (
          <li className={classes["header-link"]}>
            <Link to="/">Sign Out</Link>
          </li>
        )}
      </div>
    </header>
  );
};

export default Header;
