import React from 'react';
import {Button, Card, CardBody, CardHeader, Col} from "reactstrap";
import {Link} from "react-router-dom";
import {API_PATH} from "../tools/constants";
import {getText} from "../locales/Til";

function MaintopSection(props) {
    return (
        <div>
<Col lg="12" className="p-0 shadow-none">
    <Card className="border-0 d-flex flex-column justify-content-between cardin shadow-none">

<div className="d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center"><span className="icon icontime"/><p className="mb-0 ml-2">{props.createdAt}</p></div>
    <div className="d-flex align-items-center"><span className="icon iconeye mt-1"/><p className="mb-0 ml-2">{props.counted}</p></div>
    <div className="d-flex align-items-center"><span className="icon iconmassage mt-1"/><p className="mb-0 ml-2">100</p></div>
</div>
            <h5 className="">{props.elon}</h5>
            <p className="">{props.text}</p>
        <div className="border"/>

    </Card>
</Col>
        </div>
    );
}

export default MaintopSection;