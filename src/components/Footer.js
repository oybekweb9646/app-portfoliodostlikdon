import React from 'react';
import {Col, Container, NavItem, NavLink, Row} from "reactstrap";

function Footer(props) {
    return (
        <div className="footer pb-5">
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="navbar-nav mt-4 ">
                            <NavItem>
                                <NavLink><a href="#"><h5 className="text-white">Dustlikdon.uz</h5></a></NavLink>
                                <NavLink><a href="#"><p className="text-white">Jizzax viloyati do'stlik tumani Sanoat MFY Sanoat ko'chasi 49</p></a></NavLink>

                            </NavItem>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="navbar-nav mt-4 ">
                            <NavItem>
                                <NavLink><a href="#"><h5 className="text-white">Asosiy</h5></a></NavLink>
                                <NavLink><a href="#"><p className="text-white mb-0">Jamiyat haqida </p></a></NavLink>
                                <NavLink><a href="#"><p className="text-white mb-0">Struktura </p></a></NavLink>
                                <NavLink><a href="#"><p className="text-white mb-0">Yangiliklar</p></a></NavLink>

                            </NavItem>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="navbar-nav mt-4 ">
                            <NavItem>
                                <NavLink><a href="#"><h5 className="text-white">Asosiy</h5></a></NavLink>
                                <NavLink><a href="#"><p className="text-white mb-0">Jamiyat haqida </p></a></NavLink>
                                <NavLink><a href="#"><p className="text-white mb-0">Struktura </p></a></NavLink>
                                <NavLink><a href="#"><p className="text-white mb-0">Yangiliklar</p></a></NavLink>

                            </NavItem>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="navbar-nav mt-4 ">
                            <NavItem>
                                <NavLink><a href="#"><h5 className="text-white">Asosiy</h5></a></NavLink>
                                <NavLink><a href="#"><p className="text-white mb-0">Jamiyat haqida </p></a></NavLink>
                                <NavLink><a href="#"><p className="text-white mb-0">Struktura </p></a></NavLink>
                                <NavLink><a href="#"><p className="text-white mb-0">Yangiliklar</p></a></NavLink>

                            </NavItem>
                        </div>
                    </Col>
                </Row>

            </Container>
            <div className="line"></div>
        </div>
    );
}

export default Footer;