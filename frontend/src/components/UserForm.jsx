import classes from './userForm.module.css'
const UserForm = () => {
  return (
    <div>
      <form>
        <div className={classes.container}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
            className={classes['input-text']}
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
            className={classes['input-password']}
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
            className={classes['input-password']}
          />
          <hr />

          {/* <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p> */}
          <button type="submit" className={classes.registerbtn}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
