import React from "react";

function Footer(){
    return (
        <footer style=
        {{
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: '#495E57',
            color: 'white',
            textAlign: 'left'
        }}>
            <img src='../../public/little_lemon/Mario and Adrian A.jpg' alt="M&A footer"></img>
            <ul style={{
                listStyleType: 'none',
            }}>
                <li><h2>Doormat Navigation</h2></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <ul style={{
                listStyleType:'none',
            }}>
                <li><h2>Contact</h2></li>
                <li><a href="#">Adress</a></li>
                <li><a href="#">Phone Number</a></li>
                <li><a href="#">Email</a></li>
            </ul>
            <ul style={{
                listStyleType: 'none',
            }}>
                <li><h2>Social Media Links</h2></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
            <p>&copy; 2021</p>
        </footer>
    );
}
export default Footer;