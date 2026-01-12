import React from 'react';
import { Button } from "@/components/ui/button";
import FeatureCard from './FeatureCard';
import { Bell, Building2, Users, TriangleAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
    {
        icon: Bell,
        title: "Smart Reminders",
        description: "Get timely reminders before every inspection, renewal, or expiry date \u2014 via email and notifications."
    },
    {
        icon: Building2,
        title: "Multi-Facility Management",
        description: "Track hospitals, apartments, colleges, and factories from a single dashboard with complete visibility."
    },
    {
        icon: Users,
        title: "Agency-Driven Workflow",
        description: "Designed specifically for agencies managing compliance on behalf of multiple clients and facilities."
    },
    {
        icon: TriangleAlert,
        title: "Avoid Fines & Legal Risks",
        description: "Reduce penalties, legal notices, and compliance failures by staying ahead of deadlines.",
        variant: "blue"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Hero = () => {
    return (
        <section className="container mx-auto px-6 h-auto py-10 lg:h-full lg:py-0 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Column: Text Content */}
                <motion.div
                    className="flex flex-col gap-5 pt-2"
                    initial="hidden"
                    animate="show"
                    variants={containerVariants}
                >
                    <div className="space-y-3">
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-800 leading-[1.2]"
                        >
                            Compliance Made Simple <br />
                            Renewals Made <br />
                            Automatic.
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl"
                        >
                            Inctrack helps compliance agencies and organizations track equipment, inspections, and renewal deadlines - all in one place.
                        </motion.p>
                    </div>

                    <motion.div variants={itemVariants} className="flex items-center gap-4">
                        <Link to="/login">
                            <Button className="bg-[#3B9DF8] hover:bg-blue-600 text-white px-6 py-5 text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all h-10">
                                Log In
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs font-medium text-gray-500">
                        <div className="flex items-center gap-1.5">
                            <span className="text-red-500 font-bold">&#10003;</span> Never miss renewals
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-red-500 font-bold">&#10003;</span> Centralized compliance
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-red-500 font-bold">&#10003;</span> Smart reminders
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Feature Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial="hidden"
                    animate="show"
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants} className="h-full">
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
