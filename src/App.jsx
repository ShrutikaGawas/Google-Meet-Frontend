import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import Login from "./components/Login";
import { LoginContext } from "./context/LoginContext";

function App() {
    const [showProfile, setShowProfile] = useState(false);
  return(
  <LoginContext.Provider value={{ setShowProfile }}>
    {showProfile ? <Events /> : <Login />}
  </LoginContext.Provider>);
}
export default App;
