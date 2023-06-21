import { Button } from "antd";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>

      <Button type="primary" placeholder="Signup">
        <Link to="/register">Signup</Link>
      </Button>
      <Button
        style={{ backgroundColor: "purple", color: "white" }}
        placeholder="Login"
      >
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
};

export default Home;
