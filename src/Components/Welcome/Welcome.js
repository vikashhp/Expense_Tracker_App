import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const Welcome = () => {

    const token=localStorage.getItem('token')
    const emailVerifyHandler=async ()=>{


       const res= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCwZv808OhRcTulajFFTsrXP6Qn3bwN-uE',{
        method:'POST',
        body:JSON.stringify({
            requestType:'VERIFY_EMAIL',
            idToken:token
        }),
        headers:{
           'Content-Type':'application/json'
        }
       })

       const response= await res.json();

       console.log(response)

       alert('Email Sent Please Check Your Email')


    }
  return (
    <Fragment>
      <h1 style={{ textAlign: "center", color: "blue" }}>
        Welcome to Expense Tracker
      </h1>
      <h1 style={{textAlign:'center',marginTop:'200px'}}>
        <span>Your Profile is InComplete</span>
        <NavLink to='/UserProfile'>
          
          <span>Complete Now!</span>
        </NavLink>

      </h1>
      <Button style={{textAlign:'center',marginLeft:'50%'}} onClick={emailVerifyHandler}>Verify Email</Button>
    </Fragment>
  );
};

export default Welcome;
