import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignupPage/Signup";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import AuthContextProvider from "./Components/Store/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider className="App">
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route path="/Home">
          <SignUp />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
