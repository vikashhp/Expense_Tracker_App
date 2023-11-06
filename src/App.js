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
import AddExpense from "./Components/AddExpense/AddExpense";
import Expenses from "./Components/ExpenseList/Expenses";
import { useState } from "react";

function App() {
  const [data, setdata] = useState([]);

  const dataReceivedHandler = (data) => {
    setdata((previous) => {
      return [...previous, data];
    });
  };
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
          <Welcome />
        </Route>
        <Route path="/UserProfile">
          <UserProfile />
        </Route>
        <Route path="/ResetPassword">
          <ResetPassword />
        </Route>
        <Route path="/AddExpense">
          <AddExpense onAdd={dataReceivedHandler} />
        </Route>
      </Switch>
      <Expenses items={data} />
    </AuthContextProvider>
  );
}

export default App;
