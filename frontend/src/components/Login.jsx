import classes from "./login.module.css";
import loginService from '../services/login'
const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value 
    loginService({
      email,
      password
    })
  }

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
