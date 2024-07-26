import React from "react";

function HeaderNav(){
    return (
        <nav style={{

        }}>
            <ul style={{
                display:'flex',
                justifyContent: 'space-evenly',
                listStyleType: 'none',
            }}>
                <li><a><img src="../little_lemon/Logo.svg" alt="Logo" /></a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );

}

export default HeaderNav;