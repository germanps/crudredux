import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';


//Crear nuevo producto(función principal)
export function crearNuevoProductoAction(producto){
    return (dispatch) => {
        dispatch( agregarProducto() );
        //insertar en la API
        clienteAxios.post('/productos', producto)
            .then(resp =>{
                console.log(resp);
                //Ok
                dispatch( agregarProductoExito(producto) );
            })
            .catch(error => {
                //Error
                console.log(error);
                dispatch( agregarProductoError(true) );
            })
    }
}

export const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
});
export const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});
export const agregarProductoError = error => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
});