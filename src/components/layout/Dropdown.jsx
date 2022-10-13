import React from 'react';

const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Categorías
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                    Regionales
                    </a>
                    <a className="dropdown-item" href="#">
                    Locales
                    </a>
                    <a className="dropdown-item" href="#">
                    Internacionales
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                    Grupos
                    </a>
                </div>
            </li>
        </>
    );
}

export default Dropdown;
