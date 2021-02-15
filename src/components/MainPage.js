import React from 'react';
import FirstPage from "./FirstPage";
import Karousel from "./Karousel";
import MainTop from "./MainTop";
import GradientComponent from "./GradientComponent";
import TabsComponent from "./TabsComponent";
import BottomContent from "./BottomContent";
import Footer from "./Footer";
function MainPage(props) {
    return (
        <div>
            <FirstPage/>
            <Karousel/>
            <MainTop/>
            <GradientComponent/>
            <TabsComponent/>
            <BottomContent/>
            <Footer/>
        </div>
    );
}

export default MainPage;