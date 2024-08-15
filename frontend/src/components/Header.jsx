import classes from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../reducers/userReducer";

const Header = () => {
  const user = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("authAppUser");
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <header className={classes.header}>
      <div className={classes["header-links"]}>
        {!user ? (
          <li className={classes["header-link"]}>
            <Link to="/register">SignUp</Link>
          </li>
        ) : (
          <li className={classes["header-link"]}>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {!user ? (
          <li className={classes["header-link"]}>
            <Link to="/login">SignIn</Link>
          </li>
        ) : (
          <li className={classes["header-link"]}>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        )}
      </div>
    </header>
  );
};

export default Header;
