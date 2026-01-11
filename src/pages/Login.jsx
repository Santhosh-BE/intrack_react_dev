import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import logo from '../assets/Intrack_logo.png';
import { Mail, Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex h-screen bg-white font-sans overflow-hidden">
            {/* Left Column - Login Form */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full lg:w-1/2 h-full overflow-y-auto bg-white"
            >
                <div className="min-h-full flex flex-col justify-center items-center p-6 lg:p-12">
                    <div className="w-full max-w-md space-y-6">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-16 h-16 relative shrink-0">
                                <img src={logo} alt="Inctrack Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl text-primary leading-tight">Inctrack</span>
                                <span className="text-xs text-muted-foreground tracking-wider uppercase">Compliance Suite</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">Welcome Back</h1>
                            <p className="text-gray-500 text-sm">Sign in to manage your compliance and facilities</p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-11 border-gray-200 text-gray-600 hover:bg-gray-50 font-normal">
                                <span className="mr-2 text-lg">G</span> Google
                            </Button>
                            <Button variant="outline" className="h-11 border-gray-200 text-gray-600 hover:bg-gray-50 font-normal">
                                <span className="mr-2 text-lg">M</span> Microsoft
                            </Button>
                        </div>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-100" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-400">Or continue with email</span>
                            </div>
                        </div>

                        {/* Login Form */}
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                    <Input
                                        id="email"
                                        placeholder="Enter your email"
                                        className="pl-10 h-10 bg-gray-50 border-gray-100 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="pl-10 pr-10 h-10 bg-gray-50 border-gray-100 focus:bg-white transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-1">
                                <a href="#" className="text-sm font-medium text-blue-500 hover:text-blue-600 ml-auto">Forgot Password?</a>
                            </div>

                            <div className="flex items-start gap-3 mt-3">
                                <Checkbox id="terms" className="mt-1 border-gray-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 shrink-0" />
                                <Label htmlFor="terms" className="text-sm font-normal text-gray-500 leading-snug cursor-pointer text-left">
                                    I agree to the <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
                                </Label>
                            </div>

                            <Button className="w-full h-11 bg-[#3B9DF8] hover:bg-blue-600 text-white font-semibold shadow-md text-base rounded-md mt-5">
                                Log In
                            </Button>
                        </form>

                        <div className="text-center text-sm text-gray-500 pb-4">
                            Don't have an account? <a href="#" className="font-semibold text-blue-500 hover:underline">Sign Up</a>
                        </div>
                    </div>
                </div>
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

export default Login;
