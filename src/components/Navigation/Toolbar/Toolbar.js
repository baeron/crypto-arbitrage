import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.FontPlaceholder}>MENU</div>
        <Logo />
        <nav className={classes.FontPlaceholder}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;