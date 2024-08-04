import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeUsers } from "./reducers/userReducer";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(initializeUsers());
  },[dispatch]);

  return <div>
    {/* {users.map(user => <p key={user.id}>{user.name}</p>)} */}
    <Header />
    <UserForm />
  </div>;
};

export default App;
