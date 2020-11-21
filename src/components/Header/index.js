import React from "react";
import Link from "next/link";

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
                    <Link href={item.href}>
                        <a>{item.label}</a>
                    </Link>
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
