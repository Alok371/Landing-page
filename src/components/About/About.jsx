import React from 'react';

// Subsection components
const WhoWeAre = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat posuere metus id suscipit.
            </p>
        </div>
    );
};

const WhatWeDo = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">What We Do</h3>
            <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat posuere metus id suscipit.
            </p>
        </div>
    );
};

const WhoWeServe = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Who We Serve</h3>
            <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat posuere metus id suscipit.
            </p>
        </div>
    );
};

// Main About section
const About = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <WhoWeAre />
                <WhatWeDo />
                <WhoWeServe />
            </div>
        </div>
    );
};

export default About;
