import { useSelector } from "react-redux";
import classes from "./profile.module.scss";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate()

  const onEdit = () => {
    navigate('/edit')
  }

  const user = useSelector((state) => state.users);
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>You are logged in</h1>
      </div>
      <h2>Your name: {user.name}</h2>
      <h2>Your username: {user.username}</h2>
      <h2>Your age: {user.age}</h2>
      <button onClick={onEdit} className={classes.button}>Edit</button>
    </div>
  );
};

export default Profile;
