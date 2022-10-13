import React from 'react';
import Dropdown from './Dropdown';
import Form from './Form';
import Secciones from './Secciones';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    ITERMEI
                    </a>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                            <Dropdown/>
                        </ul>
                    <Form/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
