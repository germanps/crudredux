import React, { useState } from 'react';
import './NuevoProducto.scss';

//Redux
import { crearNuevoProductoAction } from './../../actions/productosAction';
import { iniciarValidacion, validacionExito, validacionError } from './../../actions/validacionAction';
import { useDispatch, useSelector } from 'react-redux';


const NuevoProducto = ({history}) => {

    //state
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState('');

    //Crear nuevo producto(redux)
    const dispatch = useDispatch();
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) );

    //Validar formulario
    const validarFormulario = () => dispatch( iniciarValidacion() );
    const validarFormularioExito = () => dispatch( validacionExito() );
    const validarFormularioError = () => dispatch( validacionError() );

    //Obtener datos de error
    const error = useSelector((state) => state.validacion.error)
    console.log(error);

    //Agregar producto
    const crearNuevoProducto = e => {
        e.preventDefault();

        //iniciar validacion
        validarFormulario();

        //validar campos error
        if(nombre.trim() === '' || precio.trim() === ''){
            validarFormularioError();
            return;
        }
        
        //validar campos exito
        validarFormularioExito();
        agregarProducto({
            nombre,
            precio
        });
        //redireccionar 
        history.push('/');
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
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Precio" 
                                        value={precio}
                                        onChange={ e => guardarPrecio(e.target.value)}
                                    />
                                </div>
                                {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div> : null}
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