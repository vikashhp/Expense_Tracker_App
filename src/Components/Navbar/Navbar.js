import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import AuthContext from "../Store/AuthContext";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";

const Navbars = () => {
  const authCtx = useContext(AuthContext);
  const signupinfo = authCtx.isSignUp;
  const history = useHistory();
  const loginInfo=authCtx.isLogin;

  const logoutHandler = () => {
    authCtx.logout()
    history.replace("./Login");
 
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <Navbar.Brand style={{ color: "white" }}>Expense-Tracker</Navbar.Brand>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Products</NavLink>
        {signupinfo && <NavLink to="/Login">Login</NavLink>}
        {loginInfo &&<Button onClick={logoutHandler}>Logout</Button>}
      </Container>
    </Navbar>
  );
};
export default Navbars;
