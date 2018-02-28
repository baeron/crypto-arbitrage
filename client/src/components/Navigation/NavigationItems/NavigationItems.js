import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/how_its_work">How it`s work</NavigationItem>
        <NavigationItem link="/about_us">About Us</NavigationItem>
        {/*<NavigationItem>Sign In</NavigationItem>*/}
        <NavigationItem link="/rates">Rates</NavigationItem>
        {/*<NavigationItem>Log out</NavigationItem>*/}
    </ul>
);

export default navigationItems;