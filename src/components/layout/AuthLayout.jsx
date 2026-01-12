import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        initials: "JD",
        name: "John Davidson",
        role: "Director, Healthcare Compliance Solutions",
        quote: "Inctrack has transformed how we manage compliance across 50+ hospitals. Never missed a deadline since we started!"
    },
    {
        id: 2,
        initials: "SM",
        name: "Sarah Miller",
        role: "Head of Operations, City Facilities",
        quote: "The automated reminders alone have saved us thousands in potential fines. The interface is incredibly intuitive."
    },
    {
        id: 3,
        initials: "RK",
        name: "Robert King",
        role: "Compliance Officer, King Manufacturing",
        quote: "Centralizing our compliance data was a nightmare until we found Inctrack. Now everything is just a click away."
    }
];

const AuthLayout = ({ children }) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex h-screen bg-white font-sans overflow-hidden">
            {/* Left Column - Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full lg:w-1/2 h-full overflow-y-auto bg-white"
            >
                {children}
            </motion.div>

            {/* Right Column - Info Panel */}
            <div className="hidden lg:flex w-1/2 bg-[#3B9DF8] flex-col justify-center items-center p-8 xl:p-16 relative overflow-hidden text-white">
                {/* Background Circles */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-white/10 rounded-full blur-3xl"
                />

                <div className="max-w-xl z-10 space-y-10 w-full">
                    <div className="text-center space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight"
                        >
                            Compliance Made Simple, <br />
                            Renewals Made <br />
                            Automatic
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-blue-100 text-base lg:text-lg leading-relaxed max-w-lg mx-auto"
                        >
                            Join thousands of agencies managing compliance for multiple facilities with ease
                        </motion.p>
                    </div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-3 gap-3 w-full"
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 xl:p-6 text-center space-y-2 hover:bg-white/20 transition-all">
                            <div className="flex justify-center mb-2"><CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-white" /></div>
                            <div className="text-xl lg:text-2xl xl:text-3xl font-bold">2,500+</div>
                            <div className="text-blue-100 text-[10px] lg:text-xs uppercase tracking-wide leading-tight">Facilities<br />Managed</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 xl:p-6 text-center space-y-2 hover:bg-white/20 transition-all">
                            <div className="flex justify-center mb-2"><CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-white" /></div>
                            <div className="text-xl lg:text-2xl xl:text-3xl font-bold">99.8%</div>
                            <div className="text-blue-100 text-[10px] lg:text-xs uppercase tracking-wide leading-tight">Compliance<br />Rate</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 xl:p-6 text-center space-y-2 hover:bg-white/20 transition-all">
                            <div className="flex justify-center mb-2"><CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-white" /></div>
                            <div className="text-xl lg:text-2xl xl:text-3xl font-bold">500+</div>
                            <div className="text-blue-100 text-[10px] lg:text-xs uppercase tracking-wide leading-tight">Active<br />Agencies</div>
                        </div>
                    </motion.div>

                    {/* Testimonial Carousel */}
                    <div className="relative min-h-[200px] lg:min-h-[180px]">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 w-full absolute top-0 left-0"
                            >
                                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-300 flex items-center justify-center text-blue-800 font-bold text-lg shrink-0">
                                        {testimonials[currentTestimonial].initials}
                                    </div>
                                    <div className="space-y-2 lg:space-y-3 flex-1 min-w-0">
                                        <p className="text-blue-50 italic leading-relaxed text-sm">
                                            "{testimonials[currentTestimonial].quote}"
                                        </p>
                                        <div>
                                            <h4 className="font-semibold text-white text-sm truncate">{testimonials[currentTestimonial].name}</h4>
                                            <p className="text-blue-200 text-xs truncate">{testimonials[currentTestimonial].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Carousel Dots */}
                <div className="flex gap-2 mt-8 z-10">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentTestimonial
                                ? "bg-white w-6"
                                : "bg-white/40 hover:bg-white/60"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
