import React,{useState} from 'react';
import {
    Container,
    InputGroup,
    NavbarBrand,
    Row,
    FormControl,
    InputGroupAddon,
    ButtonGroup,
    Button,
    NavbarToggler, Collapse
} from "reactstrap";

function FirstPage(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <div className="bgcolor">
            <Container>
<nav className="navbar navbar-light navbar-expand-lg px-0">
    <NavbarBrand>
        <a href="#"><h3 className="universalcolor">Dustlikdon.uz</h3></a>
    </NavbarBrand>
    <NavbarToggler onClick={toggle}/>
    <Collapse isOpen={isOpen} navbar>
    <div className="d-flex align-items-center">


        <InputGroup className="p-1">
<InputGroupAddon addonType="prepend" className="bg-white px-3 rounded">
    <img src="images/search.svg" alt=""/>
</InputGroupAddon>
            <input type="text" placeholder="Saytdan izlash" className="form-control pr-5 border-0"/>
        </InputGroup>

    </div>
    <a href="#" className="text-dark ml-auto mr-5">На рускому</a>
    <ButtonGroup className="bg-white">
        <Button className="bgcolor border-right-0"><img src="images/Vector-6.png" alt=""/></Button>
        <Button className="bgcolor universalcolor border-left-0">99872 335-41-16</Button>
    </ButtonGroup>
    </Collapse>
</nav>
            </Container>
            </div>
            <div className="bg-white">
            <Container>
            <div className="d-flex align-items-center py-3 bg-white">
                <div className="bgcolor2 rounded p-2"><img src="images/search.png" alt=""/></div>
                <a href="#" className="text-dark mx-3">Jamiyat haqida </a>
                <a href="#" className="text-dark mx-3">Jamiyat haqida </a>
                <a href="#" className="text-dark mx-3">Jamiyat haqida </a>
                <a href="#" className="text-dark mx-3">Jamiyat haqida </a>
                <a href="#" className="text-dark mx-3">Jamiyat haqida </a>
                <a href="#" className="text-dark mx-3">Jamiyat haqida </a>
            </div>
            </Container>
            </div>
        </div>
    );
}

export default FirstPage;