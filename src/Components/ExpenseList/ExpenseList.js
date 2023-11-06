import { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";

const ExpenseList = (props) => {
  return (
    <Fragment>
      <div style={{ marginLeft: "200px", marginTop: "200px" }}>
        <Container>
          <Row>
            <Col xs={10}>
              <Card className="m-1">
                <Card.Header style={{ backgroundColor: " rgb(151, 118, 252)" }}>
                  <h1>Expenses</h1>
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
