import React from 'react';
import { motion } from 'framer-motion';

const WhoWeServe = () => {
    return (
        <motion.section
            className="relative py-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Continuous moving background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500/70 to-teal-600/70 animate-bg-gradient"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2
                    className="text-3xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    Who We Serve?
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    Customer targets, e.g., Utilities, Transportation, Logistics, etc.
                </motion.p>
                <motion.h2
                    className="text-3xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                >
                    Industries We Serve
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                >
                    Our services cater to various industries including Utilities, Transportation, Logistics, Healthcare, Technology, and more.
                </motion.p>
                <motion.h2
                    className="text-3xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    How We Help
                </motion.h2>
                <motion.p
                    className="text-lg text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                >
                    We provide tailored solutions and services to address the specific needs and challenges faced by each industry we serve.
                </motion.p>
            </div>
        </motion.section>
    );
}

export default WhoWeServe;
