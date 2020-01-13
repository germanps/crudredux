import React from 'react';
import './NuevoProducto.scss';

const NuevoProducto = () => {
    return(
        <div className="nuevo-producto">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="subtitulo text-center mb-4 font-weight-bold ">Agregar Nuevo</h2>
                            <form>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nombre" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Precio</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Precio" 
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