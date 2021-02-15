import React, {Component} from 'react';
import Slider from "react-slick";
import {getText} from "../locales/Til";
class Karousel extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,

        };

        return (
            <div className=" top">
                <Slider {...settings}>
                    <div className="text-center karusel py-5"><img className="m-auto"  src="images/karouseltop.png" alt=""/>
                    <h2 className="text-white mt-5 pb-5">{getText("karousel")} <br/> {getText("karousel1")} <br/> {getText("karousel2")} </h2>
                    </div>
                    <div className="text-center karusel py-5"><img className="m-auto"  src="images/karouseltop.png" alt=""/>
                        <h2 className="text-white mt-5 pb-5">{getText("karousel")} <br/> {getText("karousel1")} <br/> {getText("karousel2")} </h2>
                    </div>
                    <div className="text-center karusel py-5"><img className="m-auto"  src="images/karouseltop.png" alt=""/>
                        <h2 className="text-white mt-5 pb-5">{getText("karousel")} <br/> {getText("karousel1")} <br/> {getText("karousel2")} </h2>
                    </div>

                </Slider>
            </div>
        );
    }
}

export default Karousel;