import React from 'react';
import { Link } from 'react-router-dom';

const ManMenu = () => {
    return (
        <nav className="navbar position-sticky top-0 start-0 navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to='/' className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signup'><button type="button" className="btn btn-primary ms-3">Sign Up</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login'><button type="button" className="btn btn-warning ms-3">Sign in</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default ManMenu;