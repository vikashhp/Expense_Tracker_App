import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { themeActions } from "../Store/themeSlice";

import { authActions } from "../Store/auth";

const Navbars = () => {
  const history = useHistory();
  const total = useSelector((state) => state.total.total);
  const premium = useSelector((state) => state.premium.isPremium);
  const isLogin = useSelector((state) => state.auth.isAuthenticated);


  const dispatch = useDispatch();

  const logoutHandler = () => {
    history.replace("./Login");

    dispatch(authActions.logout());
  };
  const themeToggleHandler = () => {
    dispatch(themeActions.toggle());
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <Navbar.Brand style={{ color: "white" }}>Expense-Tracker</Navbar.Brand>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Products</NavLink>
        <NavLink to="/Login">Login</NavLink>

        {isLogin && <Button onClick={logoutHandler}>Logout</Button>}
        {total > 10000 && (
          <Button onClick={themeToggleHandler}>Activate Premium</Button>
        )}
        <h2>Total Amount-Rs.{total}</h2>
      </Container>
    </Navbar>
  );
};
export default Navbars;
