import React, {Component} from 'react';
import {Card, CardBody, CardFooter, Col, Container, Row} from "reactstrap";
import ThirdPageKarousel from "./ThirdPageKarousel";
import Footer from "./Footer";
import {connect} from 'react-redux'
import {getOneNews} from "../redux/actions/adminNewsAction";
import MaintopSection from "./MaintopSection";
import ThirdPageRight from "./ThirdPageRight";


class News extends Component {

    componentDidMount() {


        this.props.getOneNews(this.props.match.params.newsUrl)
    }

    render() {
        return (
            <div>
                <Container className="mt-4">
                    <Row>
                        <Col lg="8" >
                            <Card className="bg-white border-0">
                                <CardBody>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <a href="#">{this.props.oneNews.menuNameUz}</a>
                                        <div className="d-flex align-items-center"><span className="icon icontime"/><p className="mb-0 ml-2">{this.props.oneNews.createdAt}</p></div>
                                        <div className="d-flex align-items-center"><span className="icon iconeye mt-1"/><p className="mb-0 ml-2">{this.props.oneNews.viewCount}</p></div>
                                        <div className="d-flex align-items-center mr-5 pr-5"><span className="icon iconmassage mt-1"/><p className="mb-0 ml-2 mr-5 pr-5">100</p></div>
                                    </div>
                                    <h3 className="mt-4">{this.props.oneNews.titleUz}</h3>
                                    <p className="pr-5 pb-4">{this.props.oneNews.descriptionUz}
                                    </p>
                                    <div className="mt-4 border w-100"></div>
                                    <div className="d-flex justify-content-between mt-4"><h3>Mavzuga izohlar </h3> <h3>2 ta fikr</h3></div>
                                    <Row>
                                        <Col lg="2" className="mt-3">
                                            <img src="/images/Rectangle 64.png" alt=""/>
                                        </Col>
                                        <Col lg="10" className="mt-3">
                                            <textarea className="w-100 p-2" placeholder="Izoh qoldirishingiz mumkin"></textarea>
                                        </Col>
                                        <Col lg="2" className="mt-3">
                                            <img src="/images/Rectangle 66.png" alt=""/>
                                        </Col>
                                        <Col lg="10" className="mt-3">
                                            <h5>Nigina Karimova </h5>
                                            <h6>Tushunmovchilik bo'yicha qayerga murojat qilsam boladi?</h6>
                                            <div className="d-flex justify-content-between align-items-center"><div className="d-flex align-items-center"><span className="icon iconeye mr-3"></span><p className="mb-1">Javob qaytarish</p></div><div><p className="mb-1">15 daqiqa avvall</p></div></div>
                                        </Col>
                                        <Col lg="2" className="mt-3">
                                            <img src="/images/Rectangle 67.png" alt=""/>
                                        </Col>
                                        <Col lg="10" className="mt-3">
                                            <h5>Nigina Karimova </h5>
                                            <h6>Tushunmovchilik bo'yicha qayerga murojat qilsam boladi?</h6>
                                            <div className="d-flex justify-content-between align-items-center"><div className="d-flex align-items-center"><span className="icon iconeye mr-3"></span><p className="mb-1">Javob qaytarish</p></div><div><p className="mb-1">15 daqiqa avvall</p></div></div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" className=" mt-0">
                            <Card className="bg-white border-0 p-3">

                                    <h3 className="mb-0">Media</h3>

                                  <Row className="p-0 m-0">
                                      {this.props.newsByMenu.map(item => (
                                          <Col lg="12" className="p-0 bg-white mt-0">

                                              <ThirdPageRight url={this.props.match.params.url} newsUrl={item.url} clas="m-auto card-img" elon={item.titleUz} createdAt={item.createdAt} counted={item.viewCount}
                                                              text={item.descriptionUz}/>
                                          </Col>
                                      ))}
                                  </Row>


                            </Card>
                            <Row>
                                <Col lg="12" className="mt-3 text-center mt-2 pb-4">
                                    <h4 className="mt-5 text-center">Shikoyatlar Mavjudmi ? online tarzda yuboring </h4>
                                    <img src="images/image 11.png" alt=""/>
                                    <h4 className="mt-4">Davlat  interaktiv xizmatlar yagona portali</h4>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>

                <div className="mt-5"/>

                <Container>
                    <Row>
                        {this.props.newsByMenu.map(item => (
                            <Col lg="4">

                                <MaintopSection url={this.props.match.params.url} newsUrl={item.url} clas="m-auto card-img" img={item.photo} elon={item.titleUz} createdAt={item.createdAt} counted={item.viewCount}
                                                text={item.descriptionUz}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    return{
        oneNews: state.news.oneNews,
        newsByMenu: state.news.newsByMenu
    }
}

export default connect(mapStateToProps, {getOneNews})(News);
