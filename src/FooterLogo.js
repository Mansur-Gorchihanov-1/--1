import React from 'react';
import logo from "./fooretLogo.svg"
function FooterLogo(props) {
    return (
        <div className="footerLogo">
            <img src={logo} alt=""/>
        </div>
    );
}

export default FooterLogo;