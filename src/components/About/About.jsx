import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';
import WhoWeServe from './WhoWeServe';

const About = () => {
    // Controls for animations
    const controlsWhoWeAre = useAnimation();
    const controlsWhatWeDo = useAnimation();
    const controlsWhoWeServe = useAnimation();

    // Intersection observers for each section
    const [refWhoWeAre, inViewWhoWeAre] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed
    });
    const [refWhatWeDo, inViewWhatWeDo] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed
    });
    const [refWhoWeServe, inViewWhoWeServe] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed
    });

    // Animate each section when in view
    useEffect(() => {
        if (inViewWhoWeAre) {
            controlsWhoWeAre.start({ opacity: 1, x: 0 });
        }
    }, [controlsWhoWeAre, inViewWhoWeAre]);

    useEffect(() => {
        if (inViewWhatWeDo) {
            controlsWhatWeDo.start({ opacity: 1, x: 0 });
        }
    }, [controlsWhatWeDo, inViewWhatWeDo]);

    useEffect(() => {
        if (inViewWhoWeServe) {
            controlsWhoWeServe.start({ opacity: 1, x: 0 });
        }
    }, [controlsWhoWeServe, inViewWhoWeServe]);

    return (
        <div id='about' className="max-w-7xl mx-auto px-4 py-8 relative z-10">
            <h2 className="text-5xl font-bold mb-12 text-center">About Us</h2>
            <div className="flex flex-col md:flex-col gap-8">
                <motion.div
                    id='whoweare'
                    className="flex-1"
                    ref={refWhoWeAre}
                    initial={{ opacity: 0, x: -50 }}
                    animate={controlsWhoWeAre}
                    transition={{ duration: 0.8 }}
                >
                    <WhoWeAre />
                </motion.div>
                <motion.div
                    id='whatwedo'
                    className="flex-1"
                    ref={refWhatWeDo}
                    initial={{ opacity: 0, x: 50 }}
                    animate={controlsWhatWeDo}
                    transition={{ duration: 0.8 }}
                >
                    <WhatWeDo />
                </motion.div>
                <motion.div
                    id='whoweserve'
                    className="flex-1"
                    ref={refWhoWeServe}
                    initial={{ opacity: 0, x: -50 }}
                    animate={controlsWhoWeServe}
                    transition={{ duration: 0.8 }}
                >
                    <WhoWeServe />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
