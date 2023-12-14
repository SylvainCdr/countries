import React from 'react';
import './style.scss';


function Header() {
    return (
       
        <div className="App">
           
            
                <div className="header">
                     
                          <img src="/images/discover.svg" alt="logo" className='logo__img' />
    

    <nav className="menu">
        <ul>
            <li><a href="#"> Accueil</a></li>
            <li><a href="#"> A propos</a></li>
        </ul>

            </nav>
    </div>
        </div>
    );
}

export default Header;
