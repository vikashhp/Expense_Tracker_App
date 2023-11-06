import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignupPage/Signup";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import AuthContextProvider from "./Components/Store/AuthContextProvider";
import Welcome from "./Components/Welcome/Welcome";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import UserProfile from "./Components/UserProfile/UserProfile";

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
        <Route path="/Welcome">
         <Welcome/>
        </Route>
        <Route path="/UserProfile">
        <UserProfile/>
        </Route>
        <Route path="/ResetPassword">
        <ResetPassword/>
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
