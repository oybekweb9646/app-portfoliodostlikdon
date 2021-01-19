import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AdminLayout extends Component {
    render() {
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
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                        </ul>
                    </div>
                    <div className="admin-content-right">

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayout;