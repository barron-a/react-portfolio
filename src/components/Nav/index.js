import React, {useState} from 'react';

function Nav(props) {
    const {
        navItems = [],
        setCurrentNavItem,
        currentNavItem,
    } = props

    return (
        <header className="row">
            <h2>
                <a href="/">
                    <span>Adam Barron</span>
                </a>
            </h2>
            <nav className="container">
                <ul className="row">
                    {navItems.map((navItem) => (
                        <li
                            className={`${currentNavItem.name === navItem.name && 'navActive'}`}
                            key={navItem.name}
                        >
                            <span 
                                onClick={() => {
                                setCurrentNavItem(navItem)
                            }}
                        >
                            {navItem.name}
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;