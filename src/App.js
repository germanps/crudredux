import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header/Header';
import Productos from './components/productos/Productos';
import NuevoProducto from './components/nuevoProducto/NuevoProducto';
import EditarProductos from './components/editarProducto/EditarProducto';
import './App.scss';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Productos} />
              <Route exact path="/productos/nuevo" component={NuevoProducto} />
              <Route exact path="/productos/editar/:id" component={EditarProductos} />
            </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  );
} 

export default App;
