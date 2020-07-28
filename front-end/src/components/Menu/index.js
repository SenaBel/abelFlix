import React from 'react';
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'

import Button from '../styledComponents/Button'

import './menu.css'

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="abelFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>

        </nav>
    );
};

export default Menu;