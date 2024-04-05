import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-teal-950 text-white py-8 relative z-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="footer-section">
                    <h2 className="text-lg font-semibold mb-4">Who We Are</h2>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/certifications">Our Certifications</Link></li>
                        <li><Link to="/leadership">Leadership Team Profiles</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-semibold mb-4">What We Do</h2>
                    <ul>
                        <li><Link to="/capabilities">Capabilities</Link></li>
                        <li><Link to="/solutions">Solutions</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-semibold mb-4">Who We Serve</h2>
                    <ul>
                        <li>Utilities</li>
                        <li>Transportation</li>
                        <li>Logistics</li>
                        {/* Add more customer targets here */}
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-semibold mb-4">Resources</h2>
                    <ul>
                        <li><Link to="/case-studies">Case Studies</Link></li>
                        <li><Link to="/white-papers">White Papers</Link></li>
                        <li><Link to="/brochures">Brochures</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
