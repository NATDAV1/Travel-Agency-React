import React, { Component } from 'react';

const Footer=()=>{
    return (
        <footer>
        <div className="row2" >
            <div className="column1" >
                <p>¿NECESITAS AYUDA?</p>
                <p>0264 123 4567</p>
                <p>enquiry@geekhubstravels.com</p>
                <br/>
                <p>Lun-Vie. 9:30-19:00 Sab. 10:00-14:00</p>
            </div>
            <div className="column2">
                <p>INFORMACION</p>
                <ul>
                    <li>Quienes Somos</li>
                    <li>Pregunatas frequentes</li>
                    <li>Politica de provacidad</li>
                    <li>Condiciones generales</li>
                    <li>Adviso legal</li>
                    <li>Contact</li>
                    <li>Programa de puntos</li>
                </ul>
            </div>
            <div className="column3">
                <p>SUSCRIBETE A LA NEWSLETTER</p>
                    <input type="text" id="email" name="email" placeholder="Email"/>
                    <button id="subscribete">Subscribete</button>
            </div>
        </div>
    </footer>
    )
}
export default Footer;
