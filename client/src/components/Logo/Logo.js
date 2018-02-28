import React from 'react';
import logoImg from '../../assets/images/logo.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logoImg} alt="crypto_arbitrage_logo" />
    </div>
);

export default logo;