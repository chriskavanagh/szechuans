import React from "react";
import Soups from "./Soups";
import Beef from "./Beef";
import Pork from "./Pork";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { addItem } from "./../actions/itemAction";

export default function Menu(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Container style={{ marginTop: "5rem" }}>
        <Row>
          <Col xs="12" sm="6">
            <Soups addItem={addItem} dispatch={dispatch} />
          </Col>

          <Col xs="12" sm="6">
            <Pork addItem={addItem} dispatch={dispatch} />
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6">
            <Beef addItem={addItem} dispatch={dispatch} />
          </Col>

          <Col xs="12" sm="6">
            <Beef addItem={addItem} dispatch={dispatch} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
