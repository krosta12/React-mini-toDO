import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderLogIn from "./HeaderLogIn";
import './Header.css'

function Header() {
    return (
        <header>
            <HeaderLogo />
            <HeaderLogIn />
        </header>
    )
}

export default Header