import React from 'react';
import { Card, CardBody, CardHeader, Col} from "reactstrap";

const BottomTab = (props) => {
    return (

            <Col lg="4">
                <Card className="border-0">
                    <CardHeader className="bg-white p-0">
                        <img className={props.clas} src={props.img} height="150px" alt=""/>
                    </CardHeader>
                    <CardBody className="d-flex flex-column justify-content-between">
                        <h5 className="">{props.elon}</h5>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="d-flex align-items-center"><span className="icon icontime"></span><p className="mb-0 ml-2">16:48/12.11.20</p></div>
                            <div className="d-flex align-items-center"><span className="icon iconeye mt-1"></span><p className="mb-0 ml-2">321</p></div>
                            <div className="d-flex align-items-center"><span className="icon iconmassage mt-1"></span><p className="mb-0 ml-2">100</p></div>
                        </div>
                    </CardBody>
                </Card>
            </Col>

    );
};

export default BottomTab;