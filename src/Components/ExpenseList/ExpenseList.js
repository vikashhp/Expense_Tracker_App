import { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import Button from "react-bootstrap/esm/Button";

const ExpenseList = (props) => {
    const editHandler=()=>{

    }
    const deleteHandler=async()=>{
      const res = await fetch('https://expensetracker-2cf7d-default-rtdb.firebaseio.com/storedata.json',{
        method:'DELETE',
      })
      const response=await res.json();

      console.log('Expense successfuly deleted')
    }
  return (
    <Fragment>
      <div style={{ marginLeft: "200px", marginTop: "200px" }}>
        <Container>
          <Row>
            <Col xs={10}>
              <Card className="m-1">
                <Card.Header style={{ backgroundColor: " rgb(151, 118, 252)",display:'flex',justifyContent:'space-between' }}>
                  <h1>Expenses</h1>
                  <Button onClick={editHandler}>Edit</Button>
                  <Button variant="danger" onClick={deleteHandler}>Delete</Button>
                </Card.Header>
                <CardBody>
                  <h2>Expense-Rs.{props.expense}</h2>
                  <h2>Description-{props.description}</h2>
                  <h3>Category-{props.category}</h3>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ExpenseList;
