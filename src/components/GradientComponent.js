import React from 'react';
import {Button} from "reactstrap";

function GradientComponent(props) {
    return (
        <div className="d-flex justify-content-between align-items-center gradient">
            <img src="images/image 18.png" alt=""/>
            <h3>Shikoyatlar mavjudmi? <br/> online tarzda yuboring</h3>
            <Button color="succes" className="text-white bg-success">Murojat yuborish</Button>
            <img src="images/image 17.png" alt=""/>
        </div>
    );
}

export default GradientComponent;