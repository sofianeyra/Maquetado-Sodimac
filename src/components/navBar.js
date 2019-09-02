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
                    <p className="navbar">
                        <img className="main-logo" src={mainLogo} alt="main-logo"></img>
                        <span className="p-15"></span>
                        <input className="search-box" placeholder="¿Qué estás buscando?" name="Ntt" value=""></input>
                        <div className="right-section">
                            <img className="gps-icon" src={gps} alt="location"></img>
                        LIMA
                        <span className="p-20"></span>
                            <button type="button" className="counter">1</button>
                            <img className="shopping-icon" src={shopping} alt="shopping cart"></img>
                            <span className="p-20"></span>
                            <img className="user-icon" src={user} alt="user"></img>
                        Mi cuenta
                        </div>
                    </p>
                    <div className="brands-bar">
                    <a className="brands left-side bold-text font-size-11" title="Sodimac Homecenter" href="https://www.sodimac.com.pe/sodimac-pe">Homecenter</a> | <a className="brands bold-text font-size-11" title="Sodimac Constructor" href="https://www.sodimac.com.pe/sodimac-pe/sodimac-constructor">Constructor</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default NavBar;