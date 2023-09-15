import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Page/Dashboard/index";
import Signup from "./Page/Signup";
import Login from "./Page/Signup/Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;
