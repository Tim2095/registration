import classes from "./userForm.module.css";
import { addUser } from "../reducers/userReducer";
import { useDispatch } from "react-redux";
const UserForm = () => {
  const dispatch = useDispatch();

  const onAddUser = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        name: "Artem",
        username: "Art",
        password: "artem1998",
        age: 25,
        email: "mao98@gmail.com",
      })
    );
  };

  return (
    <div>
      <form>
        <div className={classes.container}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
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
          <label htmlFor="age">
            <b>Age</b>
          </label>
          <input
            type="number"
            placeholder="Enter Age"
            name="age"
            id="age"
            required
            className={classes["input-text"]}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
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
            name="psw"
            id="psw"
            required
            className={classes["input-password"]}
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
            className={classes["input-password"]}
          />
          <hr />

          {/* <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p> */}
          <button
            onClick={onAddUser}
            type="submit"
            className={classes.registerbtn}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
