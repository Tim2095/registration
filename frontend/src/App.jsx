import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeUsers } from "./reducers/userReducer";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const st = useSelector((state) => state.header);
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/register" element={<UserForm />} /> 
        {/* {st === "signup" && <UserForm />} */}
        <Route path="login" element={<Login />} />
        {/* {st === "login" && <Login />} */}
      </Routes>
    </div>
  );
};

export default App;
