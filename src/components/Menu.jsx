import React from "react";
import Soups from "./Soups";
import Beef from "./Beef";
import Pork from "./Pork";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

export default function Menu(props) {
  const menu = useSelector(state => state.menuReducer.items);
  console.log(menu);

  return (
    <Container>
      <Row>
        <Col xs="12" sm="6">
          <Soups />
        </Col>

        <Col xs="12" sm="6">
          <Pork />
        </Col>
      </Row>
    </Container>
  );
}
