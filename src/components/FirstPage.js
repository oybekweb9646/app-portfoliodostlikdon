import React,{useState,Component} from 'react';
import {
    Container,
    InputGroup,
    NavbarBrand,
    InputGroupAddon,
    ButtonGroup,
    Button,
    NavbarToggler, Collapse, DropdownToggle, DropdownMenu, DropdownItem, Dropdown
} from "reactstrap";
import {connect} from 'react-redux'
import {getMenus} from "../redux/actions/adminMenusAction";
import {Link} from "react-router-dom";

import {SITE_LANG} from "../tools/constants";
import {getLang, getText} from "../locales/Til";
import {getLastNews} from "../redux/actions/adminNewsAction";

class FirstPage extends Component {

    componentDidMount() {
        this.props.getMenus();
    }

    constructor(props) {
        super(props);
        this.state ={
            isOpen: false,
            dropdownOpen: false
        }
    }



    render() {




        const changeLang = (lang) => {
            localStorage.setItem(SITE_LANG, lang);
            window.location.reload();
        }


       const toggle = () => {this.setState({isOpen: !this.state.isOpen});}

        const toggle2 = () =>{ this.setState({dropdownOpen: !this.state.dropdownOpen});}


        return (
            <div>
                <div className="bgcolor">
                    <Container>
                        <nav className="navbar navbar-light navbar-expand-lg px-0">
                            <NavbarBrand>
                                <a href="#" className="text-decoration-none"><h3 className="universalcolor mb-0">Dustlikdon.uz</h3></a>
                            </NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={this.state.isOpen}   navbar>
                                <div className="d-flex align-items-center">
                                    <InputGroup className="p-1">
                                        <InputGroupAddon addonType="prepend" className="bg-white px-3 rounded">
                                            <img src="/images/search.svg" alt=""/>
                                        </InputGroupAddon>
                                        <input type="text" placeholder={getText("search")} className="form-control pr-5 border-0"/>
                                    </InputGroup>
                                </div>

<div className="ml-auto mobile-version d-flex">
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={toggle2}>
                                    <DropdownToggle className="bg-transparent border-0 shadow-none">
                                        <a onClick={() => changeLang("ru")}  href="#" className="text-dark mr-5 text-decoration-none">{getText("button")}</a>
                                    </DropdownToggle>
                                    <DropdownMenu>

                                        <DropdownItem onClick={() => changeLang("uz")}>O'zbekcha</DropdownItem>
                                        <DropdownItem onClick={() => changeLang("en")}>English</DropdownItem>
                                        <DropdownItem onClick={() => changeLang("ru")}>На рускому</DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>
                                <ButtonGroup className="bg-white">

                                    <Button className="bgcolor universalcolor d-flex align-items-center shadow-none "><img className="mr-2" src="/images/Vector-6.png" alt=""/> 99872 335-41-16</Button>
                                </ButtonGroup>
</div>
                            </Collapse>
                        </nav>
                    </Container>
                </div>
                <div className="bg-white">
                    <Container>

                        <ul className="nav align-items-center">
                            <li className="nav-item"> <a href="#" className="text-dark nav-link pl-0"> <div className="bgcolor2 rounded p-2"><img src="/images/search.png" alt=""/></div> </a></li>






                            { this.props.menus.map((item) =>
                                (

                                <li className="nav-item menu position-relative py-2"> <div className="innerMenu d-none text-white ">

                                    {item.submenus.length>0 ?
                                        <>

                                        {item.submenus.map(item2 => (
                                                <div className="item"><Link to={"/category/" + item2.url} className="text-white text-decoration-none"><h5 className="text-white mb-0">{getLang() === "ru" ? item2.nameRu : getLang() === "en" ? item2.nameEn : item2.nameUz}</h5></Link></div>
                                            ))}
                                        </>
                                         : ""}


                                </div>
                                    <a href="#" className="text-dark ozi  nav-link ml-4">{getLang() === "ru" ? item.nameRu : getLang() === "en" ? item.nameEn : item.nameUz}</a></li>
                                ))}
                        </ul>





                    </Container>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        menus: state.menu.menus,
        getLast: state.news.getLast
    }
};


export default connect(mapStateToProps, {getMenus,getLastNews})(FirstPage) ;



