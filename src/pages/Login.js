import React, {Component} from 'react';
import {Card, CardBody, Col, Container, Row} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {connect} from "react-redux";
import {loginUser} from "../redux/actions/authAction";

class Login extends Component {
    render() {

        const login =(event, values) =>{
this.props.loginUser(values);
        };

        return (
            <div>
                <Container>
                    <Row className="vh-100 align-items-center">
                        <Col lg="4" className="offset-4 ">


                <Card>
                    <CardBody>
<AvForm onValidSubmit={login}>
    <AvField
    name="phoneNumber"
    placeholder="Phone number"
    type="text"
    required
    />
    <AvField
    name="password"
    placeholder="Password"
    type="password"
    required
    />
    <button type="Submit" className="btn btn-success btn-block">Login</button>
</AvForm>
                    </CardBody>
                </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(null, {loginUser})(Login)