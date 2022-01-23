import { Component, React } from "react";
import { Row, Col, Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <header>
        <Row>
          <Col>
            <h1>Gitti Gidiyor</h1>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
