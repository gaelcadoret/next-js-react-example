import React from "react";

/**
 * Stateless component !
 * @param menuItems
 * @param toggleTheme
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({ menuItems, toggleTheme}) => (
    <ul className="menu">
        {
            menuItems.map((item, idx) => (
                <li key={`item-${idx}`}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))
        }
        <li>
            <button
                onClick={() => toggleTheme()}
            >Toggle theme</button>
        </li>
    </ul>
);

export default Header;
