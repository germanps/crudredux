import React, { useEffect } from 'react';
import './Productos.scss';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from './../../actions/productosAction';
import Producto from '../producto/Producto';


const Productos = () => {

    //Llamar la accion principal
    const dispatch = useDispatch()//didmount
    useEffect( () => {
        //Cuando el componente esté listo
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
    }, []);

    //Acceder al state
    const loading = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const productos = useSelector(state => state.productos.productos);

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
                    {error ? <span>error al cargar los datos...</span>
                        : productos.map( producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                                
                            />
                        ))
                    }
                </tbody>
            </table>
            {loading ? <span>cargando...</span> : null}
        </div>
    );
}

export default Productos;