import { Fragment } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CardBody from "react-bootstrap/esm/CardBody";
import { useRef } from "react";
import { useState } from "react";

const ResetPassword = () => {
    const inputEmail=useRef();
    const [isLoading,setIsLoading]=useState(false)
  

    const submitHandler=async(e)=>{
        e.preventDefault();
        const enteredEmail=inputEmail.current.value;
        setIsLoading(true)
        const res= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCwZv808OhRcTulajFFTsrXP6Qn3bwN-uE',{
            method:'POST',
            body:JSON.stringify({
                requestType:'PASSWORD_RESET',
                email:enteredEmail
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const response= await res.json();

        console.log(response)
        setIsLoading(false)
       
        alert('Please Check Your Email')

    }

  return (
    <Fragment>

      <div style={{ marginLeft: "800px", marginTop: "200px" }}>
        <Container className="mt-5 , ml-5">
          <Row>
            <Col xs={4}>
              <Card className="m-1">
                <Card.Header style={{ backgroundColor: " rgb(151, 118, 252)" }}>
                  <h1></h1>
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

                     
                    
                      <Button type="submit">Change_Password</Button>
                      {isLoading && <h1>Sending Request...</h1>}

                    </Form.Group>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
