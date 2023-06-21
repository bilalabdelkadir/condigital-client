import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/auth/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
