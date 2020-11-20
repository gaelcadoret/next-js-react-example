import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({children, menuItems}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`container ${isDarkTheme ? "dark" : ""}`}>
            <Header
                menuItems={menuItems}
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
