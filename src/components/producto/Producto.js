import React from 'react';
import {Link } from 'react-router-dom';
import Swal from 'sweetalert2';

//Redux
import { productoEliminarAction } from '../../actions/productosAction';
import { useDispatch } from 'react-redux';

const Producto = ({producto}) => {
    
    //LLamar ejecutar las acciones
    const dispatch = useDispatch();

    const confirmarEliminarProducto = (id) => {
        Swal.fire({
            title: 'Eliminar registro?',
            text: "Esta acción no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d9534f',
            confirmButtonText: 'Si, borralo!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Borrado!',
                'El registro ha sido eliminado.',
                'success'
              )
              dispatch(productoEliminarAction(id))
            }
          })
        console.log(id);
        
    }

    return(
        <tr>
            <td>{producto.nombre}</td>
            <td><span className="font-weight-bold">€ {producto.precio}</span></td>
            <td>
                <Link 
                    to={`/productos/editar/${producto.id}`}
                    className="btn btn-primary mr-2"
                >Editar</Link>
                <button onClick={ () => confirmarEliminarProducto(producto.id)} className="btn btn-danger">Borrar</button>
            </td>
        </tr>
    )
}

export default Producto;