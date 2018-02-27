import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">How it`s work</NavigationItem>
        <NavigationItem link="/">About Us</NavigationItem>
        {/*<NavigationItem>Sign In</NavigationItem>*/}
        <NavigationItem link="/">Rates</NavigationItem>
        {/*<NavigationItem>Log out</NavigationItem>*/}
    </ul>
);

export default navigationItems;