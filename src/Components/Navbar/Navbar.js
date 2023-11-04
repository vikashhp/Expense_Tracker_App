import Container from "react-bootstrap/Container";
import { NavLink } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Navbars = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "black", color: "white" }}>
      <Container>
      <Navbar.Brand style={{color:'white'}}>Expense-Tracker</Navbar.Brand>
        <NavLink>Home</NavLink>
        <NavLink>Products</NavLink>
        <NavLink>About Us</NavLink>
      </Container>
    </Navbar>
  );
};
export default Navbars;
