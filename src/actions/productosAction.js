import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINAR_EXITO,
    PRODUCTO_ELIMINAR_ERROR
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


//Consultar productos
export function obtenerProductosAction(){
    return (dispatch) => {
        dispatch( descargaProductos() );

        //consultart API
        clienteAxios.get('/productos')
            .then(resp => {
                dispatch( descargaProductosExito(resp.data));
            })
            .catch(error => {
                console.log(error);
                dispatch( descargaProductosError() );
            })
    }
}
export const descargaProductos = () => ({
    type: DESCARGA_PRODUCTOS
});
export const descargaProductosExito = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});
export const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR
});


//Eliminar producto
export function productoEliminarAction(id) {
    return (dispatch) => {
        dispatch( productoEliminar() );

        //eliminar de la API
        clienteAxios.delete(`productos/${id}`)
            .then(resp => {
                dispatch( productoEliminarExito(id) );
            })
            .catch(error => {
                dispatch( productoEliminarError() );
            })
    }
}
export const productoEliminar = () => ({
    type: PRODUCTO_ELIMINAR
});
export const productoEliminarExito = id => ({
    type: PRODUCTO_ELIMINAR_EXITO,
    payload: id
});
export const productoEliminarError = () => ({
    type: PRODUCTO_ELIMINAR_ERROR
})