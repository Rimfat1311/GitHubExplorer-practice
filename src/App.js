import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from "./components/navbar";
import Notfound from "./components/notfound"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
