import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.scss';

function Header(props) {
  return (
    <nav 
    className={props.darkMode ? "dark": ""}
    >
    <div className='header'>
      <Link to='/'>
      <div className='logo'>NetMovie App</div>
      </Link>
      <div className='user-image'>
        <button><i className="fa-solid fa-user-lock"></i>
        </button>
      </div>
      <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
    </div>
    </nav>
  );
}

export default Header;