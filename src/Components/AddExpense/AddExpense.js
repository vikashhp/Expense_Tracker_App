import { Fragment } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CardBody from "react-bootstrap/esm/CardBody";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useRef } from "react";

const AddExpense = (props) => {
  const inputExpense = useRef();
  const inputDescription = useRef();
  const inputCategory = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const entereExpense = inputExpense.current.value;
    const enteredDescription = inputDescription.current.value;
    const enteredCategory = inputCategory.current.value;

    const expense_data = {
      expense: entereExpense,
      description: enteredDescription,
      category: enteredCategory,
    };

    props.onAdd(expense_data);
  };

  return (
    <Fragment>
      <h1 style={{ marginLeft: "900px" }}>Add Expense</h1>
      <div style={{ marginLeft: "800px" }}>
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
                      <Form.Label>Expense</Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="number"
                        placeholder="Enter Your Expense"
                        ref={inputExpense}
                      />
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Enter Your Expense_Description"
                        ref={inputDescription}
                      />
                      <FloatingLabel label="Category">
                        <Form.Select
                          aria-label="Floating label select example"
                          ref={inputCategory}
                        >
                          <option>Select_Category</option>
                          <option value="Food">Food</option>
                          <option value="Petrol">Petrol</option>
                          <option value="Entertainment">Entertainment</option>
                        </Form.Select>
                      </FloatingLabel>

                      <Button type="submit">Add_Expense</Button>
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

export default AddExpense;
