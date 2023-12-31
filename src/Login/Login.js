import { useRef } from "react";
import { useState } from "react";
import classes from "./Login.module.css";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Components/Store/auth";


const Login = () => {
  const history = useHistory();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  // const [isLoading,setIsLoading]=useState(false)

  const dispatch=useDispatch()

  const [isLoading, setIsLoading] = useState(false);





  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;

    setIsLoading(true);
    const res = fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwZv808OhRcTulajFFTsrXP6Qn3bwN-uE",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errmessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errmessage = data.error.message;
            }
            throw new Error(errmessage);
          });
        }
      })
      .then((data) => {
     
        
        history.replace("/Welcome");
        dispatch(authActions.login())

        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const forgetPasswordHandler = () => {
    history.replace("/ResetPassword");
  };

  return (
    <Fragment>
      <section className={classes.auth}>
        <h1>Login </h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={inputEmailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={inputPasswordRef}
            />
          </div>
          <div className={classes.actions}>
            <button>Login</button>
          </div>
          {isLoading && <h2>Sending Request...</h2>}
          <button
            onClick={forgetPasswordHandler}
            style={{
              backgroundColor: "lightBlue",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            <h3>Forget Password?</h3>
          </button>
        </form>
      </section>
      <div className={classes.auth}>
        <span>Don't have an account ?</span>
        <NavLink to="/Home">
          <span>SignUp</span>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default Login;
