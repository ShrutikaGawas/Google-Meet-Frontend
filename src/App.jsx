import "./App.css";
import Events from "./components/Events";
import Login from "./components/Login";

function App() {
  const isLoggedin = true;
  return <>{isLoggedin ? <Events /> : <Login />}</>;
}
export default App;
