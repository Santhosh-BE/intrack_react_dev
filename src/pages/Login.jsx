import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import logo from '../assets/Intrack_logo.png';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import AuthLayout from '../components/layout/AuthLayout';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <AuthLayout>
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
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/forgot-password'); }} className="text-sm font-medium text-blue-500 hover:text-blue-600 ml-auto">Forgot Password?</a>
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
        </AuthLayout>
    );
};

export default Login;
