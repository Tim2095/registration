import classes from "./login.module.css";

const Login = () => {
  return (
    <form>
      <div className={classes.container}>
        <h1>Login</h1>
        <hr />
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          id="name"
          required
          className={classes["input-text"]}
        />
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          id="username"
          required
          className={classes["input-text"]}
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
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
