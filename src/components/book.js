import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./book.css";

export default function Book() {
  return (
    <div>
      <Card style={{ width: "18rem" }} id="bookcard">
        <Card.Body>
          <Card.Title>
            Book Title
            <Button variant="danger">Save</Button>
            <Button variant="primary">other button</Button>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}