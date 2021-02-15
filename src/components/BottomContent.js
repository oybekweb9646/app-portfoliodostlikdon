import React from 'react';
import {Col, Container, Row} from "reactstrap";

function BottomContent(props) {
    return (
        <div className="bg-white my-5 ">
           <Container>
               <Row>
                   <Col lg="4" md="5" sm="6" className="border-right">
                       <div className="text-center mt-3"><img src="/images/image 10.png" alt=""/></div>
                       <p className="text-center">O'zbekiston Respublikasi Prezidentining <br/> rasmiy sayti</p>
                   </Col>
                   <Col lg="4" md="5" sm="6" className="border-right">
                       <div className="text-center mt-3"><img src="/images/image 11.png" alt=""/></div>
                       <p className="text-center">Davlat interaktiv <br/> xizmatlar yagona <br/> portali</p>
                   </Col>
                   <Col lg="4" md="5" sm="6" >
                       <div className="text-center mt-3"><img src="/images/image 12.png" alt=""/></div>
                       <p className="text-center">O'zbekiston Respublikasi  <br/> ochiq malumotlari <br/> portali</p>
                   </Col>
                   <Col lg="4" md="5" sm="6" className="border-right">
                       <div className="text-center mt-3"><img src="/images/image 13.png" alt=""/></div>
                       <p className="text-center">O'zbekiston Respublikasi <br/> Maktabgacha Talim <br/> Vazirligi</p>
                   </Col>
                   <Col lg="4" md="5" sm="6" className="border-right">
                       <div className="text-center  mt-3"><img src="/images/image 14.png" alt=""/></div>
                       <p className="text-center">"O'ZDONMAXSULOT" <br/> Aksiyadorlik <br/> Kompaniyasi</p>
                   </Col>
                   <Col lg="4" md="5" sm="6" >
                       <div className="text-center mt-3"><img src="/images/image 14.png" alt=""/></div>
                       <p className="text-center">"O'ZDONMAXSULOT" <br/> Aksiyadorlik <br/> Kompaniyasi</p>
                   </Col>
               </Row>
           </Container>
        </div>
    );
}

export default BottomContent;