import React from 'react';
import FooterMenu from "./FooterMenu";
import FooterLogo from "./FooterLogo";
import Copyright from "./Copyright";

function Footer() {
    return (
        <div className="footer">
            <FooterLogo/>
            <FooterMenu/>
            <Copyright/>
        </div>
    );
}

export default Footer;