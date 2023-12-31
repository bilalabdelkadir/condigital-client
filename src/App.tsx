import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/auth/Register/Register";
import { useSelector } from "react-redux";
import Hey from "./components/Hey";
import CreateAccount from "./components/account/CreateAccount";
import Account from "./pages/Account";

function App() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hey" element={isAuthenticated ? <Hey /> : <Login />} />

        <Route
          path="/account"
          element={isAuthenticated ? <Account /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
