import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const items = [
    {
        href: "/",
        label: "Accueil"
    },
    {
        href: "/about",
        label: "A propos"
    },
];

const DefaultLayout = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`container ${isDarkTheme ? "dark" : ""}`}>
            <Header
                menuItems={items}
                toggleTheme={toggleTheme}
            />
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default DefaultLayout;
