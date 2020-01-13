import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

//Crear nuevo producto(función principal)
export function crearNuevoProductoAction(producto){
    return (dispatch) => {
        dispatch( agregarProducto() );
        dispatch( agregarProductoExito(producto) );
    }
}

export const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
});
export const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});
export const agregarProductoError = () => ({
    type: AGREGAR_PRODUCTO_ERROR
})