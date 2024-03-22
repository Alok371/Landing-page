import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from '../About/About';

const Home = () => {
    return (
        <div id='home' className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-teal-900/80 to-teal-600/80 text-white py-32 px-8 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 z-0">
                    <svg
                        className="absolute left-0 top-0 w-full h-full"
                        viewBox="0 0 800 600"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#fff"
                            fillOpacity="0.05" // Adjust opacity here
                            d="M0 200l200-150 600 400-200 150z"
                        />
                    </svg>
                </div>
                {/* Content */}
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl font-bold mb-8 relative z-10"
                    >
                        Welcome to Our Company
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg mb-12 relative z-10"
                    >
                        We deliver innovative solutions to drive your business forward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis aliquam augue, at fermentum metus gravida vel. Vivamus lobortis luctus diam, sit amet lacinia magna dictum eget.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="relative z-10"
                    >
                        <Link
                            to="/about"
                            className="bg-white text-teal-900 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-teal-100 transition duration-300 inline-block"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-48 px-8"> {/* Adjusted py-48 for increased height */}
                <About />
            </section>
        </div>
    );
};

export default Home;
