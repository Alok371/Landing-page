import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
    return (
        <motion.section
            className="relative py-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Continuous moving background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500 to-teal-600 animate-bg-gradient"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2
                    className="text-3xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    What We Do?
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </motion.p>
                <motion.h2
                    className="text-3xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    Our Services
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </motion.p>
                <motion.h2
                    className="text-3xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    Our Approach
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                >
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </motion.p>
            </div>
        </motion.section>
    );
}

export default WhatWeDo;
