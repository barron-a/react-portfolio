import React from 'react';

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    <span>Adam Barron</span>
                </a>
            </h2>
            <nav className="container">
                <ul className="row">
                    <li className="col">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="col">
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="col">
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="col">
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;