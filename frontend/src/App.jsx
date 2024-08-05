import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeUsers } from "./reducers/userReducer";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {
  const st = useSelector((state) => state.header);
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);

  return (
    <div>
      {/* {users.map(user => <p key={user.id}>{user.name}</p>)} */}
      <Header />
      {st === "signup" && <UserForm />}
      {st === 'login' && <Login />}
    </div>
  );
};

export default App;
