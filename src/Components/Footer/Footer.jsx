import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import { BiLogoFacebookCircle} from 'react-icons/bi'


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content mt-12">
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
                <header className="footer-title">Social</header>
                <div className=' space-y-3'>
                        <p className='flex gap-1 items-center'><AiFillInstagram className='text-3xl'></AiFillInstagram> Instagram</p>
                        <p className='flex gap-1 items-center'><BiLogoFacebookCircle className='text-3xl'></BiLogoFacebookCircle> Facebook</p>
                        <p className='flex gap-1 items-center'><AiFillLinkedin className='text-3xl'></AiFillLinkedin> Linkedin</p>
                    </div>
            </nav>
            <nav>
                <header className="footer-title">Location</header>
                <a className="link link-hover">7208 Lake Rd Ste 305, Orlando, FL 32819</a>
                <a className="link link-hover">events@wedszone.com</a>
                <a className="link link-hover">+14072592388</a>
            </nav>
            
        </footer>
    );
};

export default Footer;