import classes from "./login.module.css";

import loginService from "../services/login";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loggedUser = await loginService({
      email,
      password,
    });


    dispatch(setUser(loggedUser));
    localStorage.setItem("authAppUser", JSON.stringify(loggedUser));
    navigate("/profile");
  };

  return (
    <form onSubmit={handleLogin}>
      <div className={classes.container}>
        <h1>Login</h1>
        <hr />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="email"
          id="email"
          required
          className={classes["input-text"]}
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          required
          className={classes["input-password"]}
        />
        <button type="submit" className={classes.loginbtn}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
