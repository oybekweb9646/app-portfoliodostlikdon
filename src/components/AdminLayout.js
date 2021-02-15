import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {TOKEN_NAME} from "../tools/constants";

class AdminLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
    modalOpen: false
}
    }


    render() {

        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen})
        }

        return (
            <div className="admin-layout">
                <div className="admin-navbar"></div>
                <div className="admin-content d-flex">
                    <div className="admin-content-left">
<div className="d-flex align-items-center">
    <div className="user-image">
        <span className="icon iconuser bg-dark"></span>
    </div>
    <div>
        <h5 className="mb-0">Nizom Muxammatov</h5>
        <p className="mb-0">Administrator</p>
    </div>
</div>
                        <ul className="flex-column mt-4 nav">
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin/news">News</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin/menus">Menular</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link onClick={changeModal}   className="nav-link text-white mt-4" >chiqish</Link></li>
                        </ul>

                        <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
<ModalBody>
    <h3>Rostdan ham chiqmoqchimisz</h3>
</ModalBody>
                            <ModalFooter>
                                <Link type="button" className="btn btn-danger" onClick={() => localStorage.removeItem(TOKEN_NAME)} to="/">Ha</Link>
                                <button type="button" className="btn btn-success" onClick={changeModal}>Yoq</button>
                            </ModalFooter>
                        </Modal>

                    </div>
                    <div className="admin-content-right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayout;