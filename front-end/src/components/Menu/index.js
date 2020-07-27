import React from 'react';
import Logo from '../../assets/img/Logo.png'

import Button from '../styledComponents/Button'

import './menu.css'

const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="abelFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>

        </nav>
    );
};

export default Menu;