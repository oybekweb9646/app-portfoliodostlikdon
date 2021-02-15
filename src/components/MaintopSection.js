import React from 'react';
import {Button, Card, CardBody, CardHeader, Col} from "reactstrap";
import {Link} from "react-router-dom";
import {API_PATH} from "../tools/constants";
import {getText} from "../locales/Til";

function MaintopSection(props) {
    return (
        <div>
<Col lg="12">
    <Card className="border-0">
        <CardHeader className="bg-white p-0">
            <img className={props.clas} src={API_PATH + "file/get/" + props.img} height="150px" alt=""/>
        </CardHeader>
        <CardBody className="d-flex flex-column justify-content-between">
<div className="d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center"><span className="icon icontime"></span><p className="mb-0 ml-2">{props.createdAt}</p></div>
    <div className="d-flex align-items-center"><span className="icon iconeye mt-1"></span><p className="mb-0 ml-2">{props.counted}</p></div>
    <div className="d-flex align-items-center"><span className="icon iconmassage mt-1"></span><p className="mb-0 ml-2">100</p></div>
</div>
            <h5 className="">{props.elon}</h5>
            <p className="">{props.text}</p>
            <Link to={'/category/' + props.url + "/news/" + props.newsUrl} className="btn rounded bg-white text-decoration-none py-1 px-3 batafsil">{getText("more")}</Link>
        </CardBody>
    </Card>
</Col>
        </div>
    );
}

export default MaintopSection;