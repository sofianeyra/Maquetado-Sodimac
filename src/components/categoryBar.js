import React, {Component} from 'react';
import '../styles/categoryBar.css';
import pencil from '../images/pencil.svg';

class CategoryBar extends Component {
    render(){
        return(
            <nav className="category-bar">
            <ul>
              <li className="navbar-options"><a href="blank">AIRE LIBRE,JARDÍN Y MASCOTAS</a></li>
              <li className="navbar-options"><a href="blank">AUTOMÓVIL</a></li>
              <li className="navbar-options"><a href="blank">BAÑO Y COCINA</a></li>
              <li className="navbar-options"><a href="blank">CONSTRUCCIÓN Y ACABADOS</a></li>
              <li className="navbar-options"><a href="blank">DECORACIÓN E ILUMINACIÓN</a></li>
              <li className="navbar-options"><a href="blank">ELECTROHOGAR Y CLIMATIZACIÓN</a></li>
              <li className="navbar-options"><a href="blank">HERRAMIENTAS Y MAQUINARIAS</a></li>
              <li className="navbar-options"><a href="blank">MUEBLES Y ORGANIZACIÓN</a></li>
              <li className="navbar-options"><a href="blank">PISOS, PINTURAS Y TERMINACIONES</a></li>
              <li className="navbar-options"><a href="blank">SERVICIOS HOGAR</a></li>
              <li className="navbar-options"><a href="blank">PROYECTOS E INSPIRACIÓN</a></li>
            </ul>
            </nav>
        )
    }
}

export default CategoryBar;