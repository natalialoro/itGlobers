import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCaretDown, faCouch, faMattressPillow, faUmbrella,  } from '@fortawesome/free-solid-svg-icons'



function Header() {

  return (
    <div>
        <div className="banner">
        <p className="pufi">Pufi</p>
        <div className='icons'>
        <button className= "couch"><FontAwesomeIcon icon={faCouch}></FontAwesomeIcon> </button>
        <p className="puff">PUFI PUFF</p>
        <button className= "umbrella"><FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon> </button>
        <p className="rain">PUFI RAIN</p>
        <button className= "shop"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon> </button>
        <p className="cart">PUFI CART</p>
        <button className= "nap"><FontAwesomeIcon icon={faMattressPillow}></FontAwesomeIcon> </button>
        <p className="pnap">PUFI NAP</p>
        </div>
        <p className= "cuenta">MI CUENTA <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
        <p className= "compra">MI COMPRA </p>
        <h1>ESTÁR CÓMODO,<br/> NUNCA FUE TAN FÁCIL.</h1>
        <button className='shopping'>SHOP</button>
        </div>
    </div>
  );
}

export default Header;