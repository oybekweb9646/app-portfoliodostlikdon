import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4" className="offset-4 my-5 text-center">
                        <img src="/images/gerb.png" alt=""/>

                        <h4>Bunday sahifa mavjud emas</h4>

                        <Link to="/">Bosh sahifaga otish</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;