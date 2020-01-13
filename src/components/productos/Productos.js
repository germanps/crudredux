import React from 'react';
import './Productos.scss';

const Productos = () => {
    return(
        <div className="productos">
            <h2 className="subtitulo text-center my-5">Listado de Productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>   
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}

export default Productos;