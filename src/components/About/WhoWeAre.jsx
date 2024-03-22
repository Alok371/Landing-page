import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
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
                    Who We Are?
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim nec libero malesuada commodo. Sed dignissim augue ut lectus accumsan, ac tristique lectus pharetra. Nam pulvinar sapien et purus eleifend, ac lobortis eros volutpat.
                </motion.p>
                <motion.h2
                    className="text-3xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                >
                    Our Certifications (ISO Certs)
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                >
                    Nulla nec felis libero. Mauris ut magna mi. In non augue at nisi posuere congue. Sed convallis nisi id ipsum volutpat, nec suscipit sem pretium.
                </motion.p>
                <motion.h2
                    className="text-3xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    Leadership Team Profiles
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                >
                    Sed sed urna nec mi fermentum ultrices. Integer vehicula libero et sapien molestie, eget interdum ex tempor. Morbi ultricies nec justo vel placerat.
                </motion.p>
            </div>
        </motion.section>
    );
}

export default WhoWeAre;
