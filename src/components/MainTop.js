import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import Slider from "react-slick";
import MaintopSection from "./MaintopSection";
import {getText} from "../locales/Til";
import {connect} from "react-redux";
import {getMenus} from "../redux/actions/adminMenusAction";
import {getLastNews} from "../redux/actions/adminNewsAction";

class MainTop extends Component {

    componentDidMount() {
        this.props.getLastNews();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: "unslick"
                }

            ]
        };
        return (
            <div className="pt-5 bgcolor">
                <Container>
<div><h3>{getText("news")}</h3></div>
                    <div>
                        <Slider {...settings}>

                            {this.props.gotLast.map((item) => (
                                <Row>

                                    <MaintopSection clas="m-auto card-img" img={item.photo} counted={item.viewCount} elon={item.titleUz} text={item.descriptionUz}/>
                                </Row>
                            ))}


                        </Slider>
                    </div>
                    <div className="mt-4"><h3>{getText("kornews")}</h3></div>
                    <div className="mt-3 mb-5">
                        <Slider {...settings}>
                            {this.props.gotLast.map((item) => (
                                <Row>

                                    <MaintopSection clas="m-auto card-img" img={item.photo} counted={item.viewCount} createdAt={item.createdAt} elon={item.titleUz} text={item.descriptionUz}/>
                                </Row>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        gotLast: state.news.gotLast
    }
};


export default connect(mapStateToProps, {getLastNews})(MainTop) ;
