import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Compiler from "./components/Compiler";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div data-theme="forest" className="min-h-screen bg-base-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/compiler" element={<Compiler />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
