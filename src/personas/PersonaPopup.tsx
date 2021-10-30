import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import personaMap from "../data/Personas"

const PersonaPopup = (props) => {
  //const persona = personaMap[props.Target];
  return <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Test</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
}
export default PersonaPopup;
