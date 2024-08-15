import { useState } from "react";
import { useSelector } from "react-redux";
import userService from "../services/users";
import { setUser } from "../reducers/userReducer";
import { useDispatch } from "react-redux";

const EditProfile = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users);

  const [username, setUsername] = useState(user.username);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  
  const onChangeData = async (e) => {
    e.preventDefault();

    const editedUser = {
      ...user,
      username,
      name,
      age
    }



    const newUser = await userService.updateUser(editedUser)
    console.log(newUser)
    dispatch(setUser(newUser))
    localStorage.setItem("authAppUser", JSON.stringify(newUser));
  };

  return (
    <form onSubmit={onChangeData}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};

export default EditProfile;
