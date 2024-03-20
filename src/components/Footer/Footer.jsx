import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-teal-950 text-slate-300 py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4 text-gray-300">Who We Are</h2>
                    <ul className="text-gray-400">
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/certifications" className="hover:text-white">Our Certifications (ISO Certs)</Link></li>
                        <li><Link to="/leadership" className="hover:text-white">Leadership Team Profiles</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4 text-gray-300">What We Do</h2>
                    <ul className="text-gray-400">
                        <li><Link to="/capabilities" className="hover:text-white">Capabilities</Link></li>
                        <li><Link to="/solutions" className="hover:text-white">Solutions</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4 text-gray-300">Who We Serve</h2>
                    <ul className="text-gray-400">
                        <li>Utilities</li>
                        <li>Transportation</li>
                        <li>Logistics</li>
                        {/* Add more customer targets here */}
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4 text-gray-300">Resources</h2>
                    <ul className="text-gray-400">
                        <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
                        <li><Link to="/white-papers" className="hover:text-white">White Papers</Link></li>
                        <li><Link to="/brochures" className="hover:text-white">Brochures</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                    <h2 className="text-lg font-semibold mb-4 text-gray-300">Contact Us</h2>
                    <p className="text-gray-400">123 Company St.</p>
                    <p className="text-gray-400">City, Country</p>
                    <p className="text-gray-400">info@example.com</p>
                    <p className="text-gray-400">123-456-7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
