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
            <div className="min-h-full flex flex-col items-center p-6 lg:p-8">
                <div className="w-full max-w-md space-y-5 my-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-12 h-12 relative shrink-0">
                            <img src={logo} alt="Inctrack Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl text-primary leading-tight">Inctrack</span>
                            <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Compliance Suite</span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Welcome Back</h1>
                        <p className="text-gray-500 text-xs">Sign in to manage your compliance and facilities</p>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="h-10 border-gray-200 text-gray-600 hover:bg-gray-50 font-normal text-sm">
                            <span className="mr-2 text-base">G</span> Google
                        </Button>
                        <Button variant="outline" className="h-10 border-gray-200 text-gray-600 hover:bg-gray-50 font-normal text-sm">
                            <span className="mr-2 text-base">M</span> Microsoft
                        </Button>
                    </div>

                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-100" />
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase">
                            <span className="bg-white px-2 text-gray-400">Or continue with email</span>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-3">
                        <div className="space-y-1.5">
                            <Label htmlFor="email" className="text-xs">Email</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    className="pl-9 h-9 bg-gray-50 border-gray-100 focus:bg-white transition-all text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="password" className="text-xs">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="pl-9 pr-9 h-9 bg-gray-50 border-gray-100 focus:bg-white transition-all text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-1">
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/forgot-password'); }} className="text-xs font-medium text-blue-500 hover:text-blue-600 ml-auto">Forgot Password?</a>
                        </div>

                        <div className="flex items-start gap-2 mt-2">
                            <Checkbox id="terms" className="mt-0.5 border-gray-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 shrink-0 h-3.5 w-3.5" />
                            <Label htmlFor="terms" className="text-xs font-normal text-gray-500 leading-snug cursor-pointer text-left">
                                I agree to the <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
                            </Label>
                        </div>

                        <Button className="w-full h-10 bg-[#3B9DF8] hover:bg-blue-600 text-white font-semibold shadow-md text-sm rounded-md mt-4">
                            Log In
                        </Button>
                    </form>

                    <div className="text-center text-xs text-gray-500 pb-2">
                        Don't have an account? <a href="#" className="font-semibold text-blue-500 hover:underline">Sign Up</a>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
