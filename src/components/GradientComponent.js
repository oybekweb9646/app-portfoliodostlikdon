import React from 'react';
import {Button} from "reactstrap";
import {getText} from "../locales/Til";

function GradientComponent(props) {
    return (
        <div className="d-flex justify-content-between align-items-center gradient">
            <img src="/images/image 18.png" alt=""/>
            <h3>{getText("complain")}</h3>
            <Button color="succes" className="text-white bg-success">{getText("reference")}</Button>
            <img src="/images/image 17.png" alt=""/>
        </div>
    );
}

export default GradientComponent;