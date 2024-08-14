import { useState } from "react";
import { useSelector } from "react-redux";
import userService from "../services/users";

const EditProfile = () => {
  const user = useSelector((state) => state.users);
  const [username, setUsername] = useState(user.username);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  const onChangeData = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(name);
    console.log(age);
    userService.updateUser(user)
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
