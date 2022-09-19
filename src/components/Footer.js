import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faShield } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div ClassName="footer">
        <div className="footerList">
          <p>PUFFI</p>
          <ul>
            <li>PUFI RAIN</li>
            <br></br>
            <li>PUFI PUFF</li>
            <br></br>
            <li>PUFI CART</li>
            <br></br>
            <li>PUFI NAP</li>
          </ul>
          <ul>
            <li>Contacto</li>
            <br></br>
            <li>AYUDA</li>
            <br></br>
            <li>CÓMO COMPRAR</li>
            <br></br>
            <li>TÉRMINOS Y CONDICIONES</li>
          </ul>
          <ul>
            <li>COMRA 100% SEGURA</li>
            <br></br>
            <li className="footerIcons">
              <FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faShield}></FontAwesomeIcon>
            </li>
            <br></br>
            <li>COMPRA CON LA GARANTIA DE PUFI</li>
          </ul>
          <ul>
              <li className="footerIcons"><p>SEGUINOS EN</p>
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </li>
          </ul>
        </div>
        <div>
            <p className ="copyright"> PUFFI copyright 2017-Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;