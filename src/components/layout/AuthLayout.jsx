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
                className="w-full lg:w-1/2 h-full overflow-y-auto bg-white scale-content-short"
            >
                {children}
            </motion.div>

            {/* Right Column - Info Panel */}
            <div className="hidden lg:flex w-1/2 bg-[#3B9DF8] flex-col justify-center items-center p-4 lg:p-6 xl:p-8 relative overflow-hidden text-white scale-content-short">
                {/* Background Circles - Hidden on shorter/smaller screens to save space/visual load */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full opacity-50 hidden xl:block"
                />

                <div className="max-w-xl z-10 flex flex-col justify-between h-auto gap-4 w-full">
                    <div className="text-center space-y-2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl lg:text-3xl font-bold leading-tight"
                        >
                            Compliance Made Simple, <br />
                            Renewals Made <br />
                            Automatic
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-blue-100 text-sm leading-snug max-w-lg mx-auto"
                        >
                            Join thousands of agencies managing compliance for multiple facilities with ease
                        </motion.p>
                    </div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-3 gap-2 w-full"
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-center space-y-1 hover:bg-white/20 transition-all">
                            <div className="flex justify-center mb-0.5"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                            <div className="text-lg font-bold">2,500+</div>
                            <div className="text-blue-100 text-[10px] uppercase tracking-wide leading-tight">Facilities<br />Managed</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-center space-y-1 hover:bg-white/20 transition-all">
                            <div className="flex justify-center mb-0.5"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                            <div className="text-lg font-bold">99.8%</div>
                            <div className="text-blue-100 text-[10px] uppercase tracking-wide leading-tight">Compliance<br />Rate</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-center space-y-1 hover:bg-white/20 transition-all">
                            <div className="flex justify-center mb-0.5"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                            <div className="text-lg font-bold">500+</div>
                            <div className="text-blue-100 text-[10px] uppercase tracking-wide leading-tight">Active<br />Agencies</div>
                        </div>
                    </motion.div>

                    {/* Testimonial Carousel */}
                    <div className="relative min-h-[140px]">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-4 w-full absolute top-0 left-0"
                            >
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-800 font-bold text-sm shrink-0">
                                        {testimonials[currentTestimonial].initials}
                                    </div>
                                    <div className="space-y-1 flex-1 min-w-0">
                                        <p className="text-blue-50 italic leading-relaxed text-xs">
                                            "{testimonials[currentTestimonial].quote}"
                                        </p>
                                        <div>
                                            <h4 className="font-semibold text-white text-xs truncate">{testimonials[currentTestimonial].name}</h4>
                                            <p className="text-blue-200 text-[10px] truncate">{testimonials[currentTestimonial].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Carousel Dots */}
                <div className="flex gap-1.5 mt-2 z-10">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentTestimonial
                                ? "bg-white w-4"
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
