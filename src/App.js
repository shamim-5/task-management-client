import { Routes, Route } from "react-router-dom";
import "./App.css";
import Calender from "./Pages/Home/Calender";
import Completed from "./Pages/Home/Completed";
import Home from "./Pages/Home/Home";
import ToDo from "./Pages/Home/ToDo";
import Registration from "./Pages/Login/Registration";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
        <Footer />
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
