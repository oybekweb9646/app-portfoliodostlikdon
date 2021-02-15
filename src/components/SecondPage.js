import React, {Component} from 'react';
import FirstPage from "./FirstPage";
import Slider from "react-slick";
import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import MaintopSection from "./MaintopSection";
import GradientComponent from "./GradientComponent";
import Footer from "./Footer";
import BottomContent from "./BottomContent";
import {connect} from 'react-redux'
import {getNewsByMenu} from "../redux/actions/adminNewsAction";

class SecondPage extends Component{

    componentDidMount() {
        this.props.getNewsByMenu(this.props.match.params.url)
    }

    render() {
        return (
            <div>
                <FirstPage/>


                <div className="pb-5"><img src="/images/Rectangle 4.png" alt=""/></div>
                <Container className="mb-3">
                    <Row>
                        <Col lg={"12"}>
                            <div><h3 className="ml-4">Yangiliklar</h3></div>
                        </Col>

                        {this.props.newsByMenu.map(item => (
                            <Col lg="4">

                                <MaintopSection url={this.props.match.params.url} newsUrl={item.url} clas="m-auto card-img" img={item.photo} elon={item.titleUz} createdAt={item.createdAt} counted={item.viewCount}
                                                text={item.descriptionUz}/>
                            </Col>
                        ))}

                    </Row>
                </Container>


                <BottomContent/>
                <GradientComponent/>
                <Footer/>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return{
newsByMenu: state.news.newsByMenu
    }
}

export default connect(mapStateToProps, {getNewsByMenu})(SecondPage) ;