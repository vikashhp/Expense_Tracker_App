import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";

import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";

const Navbars = () => {

 
  const history = useHistory();


  const logoutHandler = () => {
   
    history.replace("./Login");
 
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <Navbar.Brand style={{ color: "white" }}>Expense-Tracker</Navbar.Brand>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Products</NavLink>
         <NavLink to="/Login">Login</NavLink>
        <Button onClick={logoutHandler}>Logout</Button>
      </Container>
    </Navbar>
  );
};
export default Navbars;
