import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import Slider from "react-slick";
import MaintopSection from "./MaintopSection";
class ThirdPageKarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div className="pt-5 bgcolor">
                <Container>
                    <div><h3>So'ngi Yangiliklar</h3></div>
                    <div>
                        <Slider {...settings}>
                            <Row>

                                <MaintopSection clas="m-auto" img="/images/image 14.png" elon="Elon!!!" text=" 'DO'STLIKDONMAXSULOTLARI' AJ ning aksyadorlari diqqatiga! 2020-yil 27-mart kuni soat 9:00 da"></MaintopSection>
                            </Row>
                            <Row>

                                <MaintopSection clas="m-auto" img="/images/gerb.png" text="'O'zdonmaxsulot' aksiyadorlik kampaniya tizim korxonalari tomonidan istisno tariqasida maxalliy" elon="Eksport qiluvchi tadbirkorlik Subyektlariga..."></MaintopSection>
                            </Row>
                            <Row>
                                <MaintopSection clas="m-auto card-img" text="'DO'STLIKDONMAXSULOTLARI' AJ ning boshqaruv raisi tomonidan Do'stlik tumanidagi 2-sonli..." elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="/images/girls.png"></MaintopSection>

                            </Row>
                            <Row>
                                <MaintopSection clas="m-auto card-img" img="/images/image 17.png"></MaintopSection>

                            </Row>

                        </Slider>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ThirdPageKarousel;