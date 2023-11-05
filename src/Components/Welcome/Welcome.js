import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <Fragment>
      <h1 style={{ textAlign: "center", color: "blue" }}>
        Welcome to Expense Tracker
      </h1>
      <h3 style={{textAlign:'center',marginTop:'200px'}}>
        <span>Your Profile is InComplete</span>
        <NavLink to='/UserProfile'>
          
          <span>Complete Now!</span>
        </NavLink>
      </h3>
    </Fragment>
  );
};

export default Welcome;
