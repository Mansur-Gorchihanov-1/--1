import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import Gorizontal from "./Gorizontal"
function Header() {
    return (
        <>
        <div className="header">
            <Logo/>
            <Menu/>
        </div>
            <Gorizontal/>
        </>
    );
}

export default Header;