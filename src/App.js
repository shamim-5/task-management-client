import { Routes, Route } from "react-router-dom";
import "./App.css";
import Calender from "./Pages/Home/Calender";
import Completed from "./Pages/Home/Completed";
import Home from "./Pages/Home/Home";
import ToDo from "./Pages/Home/ToDo";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </Navbar>
      <Footer />
    </div>
  );
}

export default App;
