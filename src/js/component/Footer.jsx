import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Footer(props){
    return (
        <footer className="bg-dark text-center py-2">
            <Link to={"/"}>
                <img src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-black.png" id="logo2" />
            </Link>
        </footer>
        );
}

export default Footer;