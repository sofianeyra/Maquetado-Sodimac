import React, {Component} from 'react';
import '../styles/styles.css';
class Topbar extends Component {
render(){
    return( 
    <section className="top-bar">
        <div className="hea-top">
            <div className="phone-section">
                <p className="alignTopNew">
                    <a href="01 615 6002" className="phone" title="Ir a Compra Telefonica">Venta Telefónica <b>(01)615 6002</b></a>
                    <span className="line">|</span>
                    <a href="01 419 2000" className="phone" title="Ir a Servicio al cliente">Servicio al Cliente<b>(01) 419 2000</b></a>
                    <span className="line">|</span>
                    <a href="https://www.sodimac.com.pe/" className="buySection" title="Ir a Tiendas">Tiendas</a>
                    <span className="line">|</span>
                    <a href="https://www.sodimac.com.pe/" className="buySection" title="Ir a Seguimiento de compras">Seguimiento de tu compra</a>
                    <span className="line">|</span>
                    <a href="https://www.sodimac.com.pe/" className="buySection" title="Ir a Venta Empresa">Venta Empresa</a>
                </p>
            </div>
            <div className="pull-right text-right clearfix horizontal">
                <ul>
                    <li>
                        <a href="http://www.falabella.com.pe/" className="falabellaSection" alt="Ir a Falabella">FALABELLA</a>
                        <span className="separator">|</span>
                    </li>
                    <li>
                        <a href="https://www.bancofalabella.pe/" className="falabellaSection" alt="Ir a Banco Falabella">BANCO</a>
                        <span className="separator">|</span>
                    </li>
                    <li>
                        <a href="https://www.bancofalabella.pe/" className="falabellaSection" alt="Ir a PUNTOS CMR">CMR PUNTOS</a>
                        <span className="separator">|</span>
                    </li>
                    <li>
                        <a href="http://www.viajesfalabella.com.pe/" className="falabellaSection" alt="Ir a <Viajes Falabella">VIAJES</a>
                        <span className="separator">|</span>
                    </li>
                    <li>
                        <a href="https://web.segurosfalabella.com/pe/" className="falabellaSection" alt="Ir a Seguros Falabella">SEGUROS</a>
                        <span className="separator">|</span>
                    </li>
                    <li>
                        <a href="http://www.tottus.com.pe/tottus-pe/" className="falabellaSection" alt="Ir a Tottus">TOTTUS</a><span className="separator">|</span>
                    </li>
                    <li>
                        <a href="https://www.linio.com.pe/" className="falabellaSection" alt="Ir a Linio">LINIO</a>
                    </li>
                </ul>
        </div>
    </div>
</section>
    )
    }
}
export default Topbar;