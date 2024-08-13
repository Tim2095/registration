import { useSelector } from "react-redux";
import classes from './profile.module.scss'
const Profile = () => {
  const user = useSelector((state) => state.users);
  return (
    <div className={classes.container}>
      <h1>You are logged in</h1>
      <h2>{user.name}</h2>
      <h2>{user.username}</h2>
      <h2>{user.age}</h2>
    </div>
  );
};

export default Profile;
