import React, {Component} from 'react';
import '../styles/styles.css';
class Topbar extends Component {
render(){
    return( 
    <section className="top-bar">
        <div className="top">
            <div className="phone-section left no-textdecor">
                <p className="alignItems">
                    <a href="01 615 6002" className="phone" title="Ir a Compra Telefonica">Venta Telefónica <b>(01)615 6002</b></a>
                    <span className="line">|</span>
                    <a href="01 419 2000" className="phone" title="Ir a Servicio al cliente">Servicio al Cliente<b>(01) 419 2000</b></a>
                    <span className="line">|</span>
                    <a href="https://www.sodimac.com.pe/" className="buySection" title="Ir a Tiendas">Tiendas</a>
                    <span className="line">|</span>
                    <a href="https://www.sodimac.com.pe/" className="buySection" title="Ir a Seguimiento de compras">Seguimiento de tu compra</a>
                    <span className="line">|</span>
                    <a href="https://www.sodimac.com.pe/" className="buySection" title="Ir a Venta Empresa">Venta Empresa</a>
                    <span className="separator"></span>
                    <a href="http://www.falabella.com.pe/" className="falabellaSection right" alt="Ir a Falabella">FALABELLA</a>
                    <span className="line m-left m-right">|</span>
                    <a href="https://www.bancofalabella.pe/" className="falabellaSection right" alt="Ir a Banco Falabella">BANCO</a>
                    <span className="line m-left m-right">|</span>
                    <a href="https://www.bancofalabella.pe/" className="falabellaSection right" alt="Ir a PUNTOS CMR">CMR PUNTOS</a>
                    <span className="line m-left m-right">|</span>
                    <a href="http://www.viajesfalabella.com.pe/" className="falabellaSection right" alt="Ir a <Viajes Falabella">VIAJES</a>
                    <span className="line m-left m-right">|</span>
                    <a href="https://web.segurosfalabella.com/pe/" className="falabellaSection right" alt="Ir a Seguros Falabella">SEGUROS</a>
                    <span className="line m-left m-right">|</span>
                    <a href="http://www.tottus.com.pe/tottus-pe/" className="falabellaSection right" alt="Ir a Tottus">TOTTUS</a>
                    <span className="line m-left m-right">|</span>
                    <a href="https://www.linio.com.pe/" className="falabellaSection right" alt="Ir a Linio">LINIO</a>
                </p>
        </div>
    </div>
</section>
    )
    }
}
export default Topbar;