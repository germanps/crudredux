import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return(
        <nav className="header navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1 className="titulo">
                    <Link to={'/'} className="text-dark">
                        CRUD - Productos
                    </Link>
                </h1>
                <Link to={"/productos/nuevo"} className="btn btn-success nuevo-post d-block d-md-inline-block" >
                    Agregar Producto
                </Link>
            </div>
        </nav>
    );
}
 
export default Header;