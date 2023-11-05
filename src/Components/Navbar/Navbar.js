import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import AuthContext from "../Store/AuthContext";

const Navbars = () => {
const authCtx=useContext(AuthContext);
const signupinfo=authCtx.isSignUp;

  return (
    <Navbar expand="lg" style={{ backgroundColor: "black", color: "white" }}>
      <Container>
      <Navbar.Brand style={{color:'white'}}>Expense-Tracker</Navbar.Brand>
      <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Products</NavLink>
        {signupinfo && <NavLink to="/Login">Login</NavLink>}
      </Container>
    </Navbar>
  );
};
export default Navbars;
