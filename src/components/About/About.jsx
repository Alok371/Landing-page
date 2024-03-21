import React from 'react';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';
import WhoWeServe from './WhoWeServe';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
            <div className="flex flex-col md:flex-col gap-8">
                <div className="flex-1">
                    <WhoWeAre />
                </div>
                <div className="flex-1">
                    <WhatWeDo />
                </div>
                <div className="flex-1">
                    <WhoWeServe />
                </div>
            </div>
        </div>
    );
};

export default About;
