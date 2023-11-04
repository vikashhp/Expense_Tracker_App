import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignupPage/Signup";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <SignUp />
    </div>
  );
}

export default App;
