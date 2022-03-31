import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <div className="link-container">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default App;
