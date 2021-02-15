
import classNames from 'classnames';
import {Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import BottomTab from "./BottomTab";
import MaintopSection from "./MaintopSection";


import React, {Component} from 'react';
import {connect} from "react-redux";
import {getLastNews} from "../redux/actions/adminNewsAction";
import Slider from "react-slick";

class TabsComponent extends Component {

    componentDidMount() {
        this.props.getLastNews();
    }

    constructor(props) {
        super(props);
        this.state = {
            activTab: '1'
        }

    }


    render() {


        const toggle = tab => {
            if (this.state.activTab !==tab) this.setState({activTab: tab})
        };



        return (



            <div className="container">
                <h3 className="mt-5 mb-1 ml-2">Media</h3>
                <Nav tabs className="p-2">
                    <NavItem className="bg-white">
                        <NavLink className={classNames({active:this.state.activTab === '1'})}
                                 onClick={() => {toggle('1')}}>
                            <Button className="bg-white">Barchasi</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem className="bg-white px-1">
                        <NavLink className={classNames({active:this.state.activTab === '2'})}
                                 onClick={() => {toggle('2')}}>
                            <Button className="bg-white">FotoGalereya</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem className="bg-white">
                        <NavLink className={classNames({active:this.state.activTab === '3'})}
                                 onClick={() => {toggle('3')}}>
                            <Button className="bg-white">Videogalareya</Button>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activTab}>
                    <TabPane tabId="1">
                        <Row>
                            {this.props.gotLast.map((item) => (
                                <BottomTab clas="m-auto card-img" img={item.photo} counted={item.viewCount} createdAt={item.createdAt} elon={item.titleUz} text={item.descriptionUz}/>

                            ))}


                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/image 17.png"/>
                            <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/girls.png"/>
                            <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/elon.png"/>

                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            {this.props.gotLast.map((item) => (
                                <BottomTab clas="m-auto card-img" img={item.photo} counted={item.viewCount} createdAt={item.createdAt} elon={item.titleUz} text={item.descriptionUz}/>

                            ))}
                        </Row>
                    </TabPane>
                </TabContent>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        gotLast: state.news.gotLast
    }
};


export default connect(mapStateToProps, {getLastNews})(TabsComponent) ;


