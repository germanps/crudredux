import { combineReducers } from 'redux';
import productos from './productosReducer';
import validacion from './validacionReducer';

export default combineReducers({
    productos,
    validacion
});