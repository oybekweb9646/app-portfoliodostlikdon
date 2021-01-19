import React,{useState} from 'react';
import classNames from 'classnames';
import {Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import BottomTab from "./BottomTab";
import MaintopSection from "./MaintopSection";
const TabsComponent = (props) => {

    const [activTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activTab !==tab) setActiveTab(tab);
    };

    return (
        <div className="container">
            <h3 className="mt-5 mb-1 ml-2">Media</h3>
<Nav tabs className="p-2">
    <NavItem className="bg-white">
        <NavLink className={classNames({active:activTab === '1'})}
        onClick={() => {toggle('1')}}>
<Button className="bg-white">Barchasi</Button>
        </NavLink>
    </NavItem>
    <NavItem className="bg-white px-1">
        <NavLink className={classNames({active:activTab === '2'})}
        onClick={() => {toggle('2')}}>
<Button className="bg-white">FotoGalereya</Button>
        </NavLink>
    </NavItem>
    <NavItem className="bg-white">
        <NavLink className={classNames({active:activTab === '3'})}
        onClick={() => {toggle('3')}}>
<Button className="bg-white">Videogalareya</Button>
        </NavLink>
    </NavItem>
</Nav>
            <TabContent activeTab={activTab}>
                <TabPane tabId="1">
                    <Row>
                       <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/elon.png"></BottomTab>
                       <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/girls.png"></BottomTab>
                       <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/javon.png"></BottomTab>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/image 17.png"></BottomTab>
                        <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/girls.png"></BottomTab>
                        <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/elon.png"></BottomTab>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/javon.png"></BottomTab>
                        <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/elon.png"></BottomTab>
                        <BottomTab clas="m-auto card-img" elon="'DO'STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." img="images/girls.png"></BottomTab>
                    </Row>
                </TabPane>
            </TabContent>

        </div>
    );
};

export default TabsComponent;