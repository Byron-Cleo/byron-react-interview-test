import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; 2021: Interview Test{' '}
            (<small style={{ fontSize: '10px' }}>By Byron Ochara</small>)
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
