import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-12">
            <aside>                
                <p className='text-4xl'>WedsZone</p>
                <p className='text-base'>Create Your Memories</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <Link className="link link-hover" to={`/service`}>Planning</Link>
                <a className="link link-hover">Planning</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Decorations</a>
                <a className="link link-hover">Photography</a>
                <a className="link link-hover">Cinematography</a>
                <a className="link link-hover">Album Creation</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Press</a>
            </nav>
            
        </footer>
    );
};

export default Footer;