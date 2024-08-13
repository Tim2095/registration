import UserForm from "./components/UserForm";
import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";

const App = () => {


  const user = useSelector((state) => state.users);
  console.log(user.length)
  useEffect(() => {
    const token = localStorage.getItem("authAppUser");
    console.log(token)
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="register" element={<UserForm />} />
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={user && user.username ? <Profile /> : <Navigate replace to="/login" />}
       />

      </Routes>
    </div>
  );
};

export default App;
