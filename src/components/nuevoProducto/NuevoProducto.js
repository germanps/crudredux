import React, { useState } from 'react';
import './NuevoProducto.scss';

//Redux
import { crearNuevoProductoAction } from './../../actions/productosAction';
import { useDispatch } from 'react-redux';


const NuevoProducto = () => {

    //state
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState('');

    //Crear nuevo producto(redux)
    const dispatch = useDispatch();
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) );

    //Agregar producto
    const crearNuevoProducto = e => {
        e.preventDefault();

        //validar campos vacios
        if(nombre.trim() === '' || precio.trim() === ''){
            console.log("Error validación");
            return;
        }
        
        agregarProducto({
            nombre,
            precio
        });

    }

    return(
        <div className="nuevo-producto">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="subtitulo text-center mb-4 font-weight-bold ">Agregar Nuevo</h2>
                            <form onSubmit={crearNuevoProducto}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nombre" 
                                        value={nombre}
                                        onChange={ e => guardarNombre(e.target.value) }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Precio</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Precio" 
                                        value={precio}
                                        onChange={ e => guardarPrecio(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                            </form>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;