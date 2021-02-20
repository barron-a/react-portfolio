import React from 'react';

function Nav() {
    const navItems = [
        { name: "about", description: "About me section" },
        { name: "portfolio", description: "examples of other coding projects" },
        { name: "contact", description: "Adam's contact information" },
        { name: "resume", description: "Adam's resume"}
    ];

    function navItemSelected(name) {
        console.log(`${name} clicked`);
    }

    return (
        <header>
            <h2>
                <a href="/">
                    <span>Adam Barron</span>
                </a>
            </h2>
            <nav className="container">
                <ul className="row">
                    {navItems.map((navItem) => (
                        <li
                            key={navItem.name}
                        >
                            <span onClick={() => navItemSelected(navItem.name)} >
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