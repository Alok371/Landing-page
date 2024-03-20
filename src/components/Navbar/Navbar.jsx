import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMouseLeave = () => {
        // Close the dropdown menu after a short delay when the mouse leaves
        setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
    };

    return (
        <nav className="bg-teal-950 text-white p-4 shadow-2xl shadow-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src="path_to_your_logo" alt="Logo" className="h-8 w-auto" />
                </div>
                <ul className="flex flex-col md:flex-row md:items-center">
                    <li className="mr-4 mb-2 md:mb-0">
                        <Link to="/home" className="hover:text-gray-200">Home</Link>
                    </li>
                    <li className="mr-4 mb-2 md:mb-0 relative" onMouseEnter={toggleDropdown} onMouseLeave={handleMouseLeave}>
                        <Link to="/about" className="hover:text-gray-200">About</Link>
                        <ul ref={dropdownRef} className={`absolute bg-blue-950 text-white p-2 rounded-md shadow-md ${isDropdownOpen ? 'block' : 'hidden'}`} style={{ width: '200px' }}>
                            <li className="hover:text-gray-200">
                                <Link to="/about/whatwedo" className="block px-4 py-2">What We Do</Link>
                            </li>
                            <li className="hover:text-gray-200">
                                <Link to="/about/whoweare" className="block px-4 py-2">Who We Are</Link>
                            </li>
                            <li className="hover:text-gray-200">
                                <Link to="/about/whoweserve" className="block px-4 py-2">Who We Serve</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="mr-4 mb-2 md:mb-0">
                        <Link to="/resources" className="hover:text-gray-200">Resources</Link>
                    </li>
                    <li className="mr-4 mb-2 md:mb-0">
                        <Link to="/careers" className="hover:text-gray-200">Careers</Link>
                    </li>
                    <li className="mr-4 mb-2 md:mb-0">
                        <Link to="/contactus" className="hover:text-gray-200">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
