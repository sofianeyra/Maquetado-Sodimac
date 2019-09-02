import React, {Component} from 'react';
import '../styles/navBar.css';
import '../styles/styles.css';
import mainLogo from '../images/main-logo-normal.png';
import responsiveLogo from '../images/main-logo-responsive.jpg';
import user from '../images/user.svg';
import search from '../images/search.svg';
import gps from '../images/gps.svg';
import shopping from '../images/shoppingcart.svg';

class NavBar extends Component {
    render(){
        return(
            <section className="main-header">
                <div className="brand-section">
                    <img src={mainLogo} alt="main-logo"></img>
                    <p>
		                <a className="bold-text font-size-11" title="Sodimac Homecenter" href="https://www.sodimac.com.pe/sodimac-pe">Homecenter</a> | <a className="bold-text font-size-11" title="Sodimac Constructor" href="https://www.sodimac.com.pe/sodimac-pe/sodimac-constructor">Constructor</a>
                        <input className="search-box" placeholder="¿Qué estás buscando?" name="Ntt" value=""></input>
                        <img className="gps-icon" src={gps} alt="location"></img>
                        LIMA
                        <span className="counter">1</span>
                        <img className="shopping-icon" src={shopping} alt="shopping cart"></img>
                        <img className="user-icon" src={user} alt="user"></img>
                        <p>Mi cuenta</p>
                    </p>
                </div>
            </section>
        )
    }
}

export default NavBar;