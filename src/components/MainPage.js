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
            <FirstPage></FirstPage>
            <Karousel></Karousel>
            <MainTop></MainTop>
            <GradientComponent></GradientComponent>
            <TabsComponent></TabsComponent>
            <BottomContent></BottomContent>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;