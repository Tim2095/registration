import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeUsers } from "./reducers/userReducer";
import UserForm from "./components/UserForm";
const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  console.log(users)

  useEffect(() => {
    dispatch(initializeUsers());
  },[]);

  return <div>
    {/* {users.map(user => <p key={user.id}>{user.name}</p>)} */}
    <UserForm />
  </div>;
};

export default App;
