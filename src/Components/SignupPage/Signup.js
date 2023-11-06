import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CardBody from "react-bootstrap/esm/CardBody";
import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../Store/AuthContext";



import { Fragment } from "react";
import { NavLink } from "react-router-dom";


const SignUp = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputcpassword = useRef();

  const authCtx=useContext(AuthContext);


  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = inputEmail.current.value;
    const enteredPassword = inputPassword.current.value;
    const enteredcpassword = inputcpassword.current.value;

    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwZv808OhRcTulajFFTsrXP6Qn3bwN-uE",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            usercPassword: enteredcpassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await res.json();
      authCtx.signUp(response);

      console.log("User has successfully signed up.");
      alert('Successfully SignedUp! Login to Continue')
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <div style={{ marginLeft: "800px", marginTop: "200px" }}>
        <Container className="mt-5 , ml-5">
          <Row>
            <Col xs={4}>
              <Card className="m-1">
                <Card.Header style={{ backgroundColor: " rgb(151, 118, 252)" }}>
                  <h1>SignUp</h1>
                </Card.Header>
                <CardBody>
                  <Form onSubmit={submitHandler}>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>

                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Enter Your Email"
                        ref={inputEmail}
                      />

                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="password"
                        placeholder="Enter Your Password"
                        ref={inputPassword}
                      />

                      <Form.Label>Confirm_Password</Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="password"
                        placeholder="Confirm Password"
                        ref={inputcpassword}
                      />
                      <Button type="submit">SignUp</Button>
                    </Form.Group>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ marginLeft: "800px", marginTop: "20px" }}>
        <Container>
          <Row>
            <Col xs={4}>
              <Card>
                <Card.Header style={{ backgroundColor: " rgb(151, 118, 251)" }}>
                  <h3>
                    <span>Have an account ?</span>
                    <NavLink to="/Login">
                      <span>Login</span>
                    </NavLink>
                  </h3>
                </Card.Header>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default SignUp;
