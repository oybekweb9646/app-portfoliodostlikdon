import React, {Component} from 'react';
import {Card, CardBody, Col, Container, Row} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {connect} from "react-redux";
import {loginUser} from "../redux/actions/authAction";

class Login extends Component {

    componentDidMount() {
         function loginspinner() {
            return function (dispatch) {
                        dispatch({type: "CHANGE_LOADING", payload: {pageLoading: false}})
            }
        }
    }

    render() {



        const login =(event, values) =>{
this.props.loginUser(values, this.props.history);
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
    <button type="Submit" disabled={this.props.isLoading} className="btn btn-success btn-block">{this.props.isLoading ? <span className="spinner-border spinner-border-sm"/> : ""} Login </button>
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

const mapStateToProps = (state) => {
    return {
        isLoading: state.Login.isLoading
    }
};

export default connect(mapStateToProps, {loginUser})(Login)