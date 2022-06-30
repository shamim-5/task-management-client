import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1>Project Start Now</h1>
    </div>
  );
}

export default App;
