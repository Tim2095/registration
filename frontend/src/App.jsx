import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./reducers/userReducer";
import EditProfile from "./components/EditProfile";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedUserJson = localStorage.getItem("authAppUser");
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson);
      dispatch(setUser(user));
    } else {
      dispatch(setUser(null)); // Clear user if no data in localStorage
    }
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="register" element={<UserForm />} />
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            user && user.username ? (
              <Profile />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="edit" element={user && user.name && <EditProfile />} />
      </Routes>
    </div>
  );
};

export default App;
