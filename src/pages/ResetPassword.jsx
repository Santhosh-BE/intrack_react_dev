import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from '../assets/Intrack_logo.png';
import { Lock, Eye, EyeOff, Check } from 'lucide-react';
import AuthLayout from '../components/layout/AuthLayout';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <AuthLayout>
            <div className="min-h-full flex flex-col items-center p-6 lg:p-8">
                <div className="w-full max-w-md space-y-4 my-auto">
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
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Reset Password</h1>
                        <p className="text-gray-500 text-xs">Create a new strong password for your account</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); navigate('/reset-confirmation'); }}>
                        <div className="space-y-1.5">
                            <Label htmlFor="password" className="text-xs">New Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter new password"
                                    className="pl-9 pr-9 h-9 bg-gray-50 border-gray-100 focus:bg-white transition-all text-sm"
                                    required
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

                        <div className="space-y-1.5">
                            <Label htmlFor="confirmPassword" className="text-xs">Confirm Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm new password"
                                    className="pl-9 pr-9 h-9 bg-gray-50 border-gray-100 focus:bg-white transition-all text-sm"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Password Requirements */}
                        <div className="bg-gray-50 rounded-lg p-3 space-y-1.5">
                            <p className="text-[10px] text-gray-500 font-medium">Password must contain:</p>
                            <ul className="space-y-0.5">
                                <li className="flex items-center text-[10px] text-blue-500">
                                    <Check className="w-2.5 h-2.5 mr-1.5" />
                                    At least 8 characters
                                </li>
                                <li className="flex items-center text-[10px] text-blue-500">
                                    <Check className="w-2.5 h-2.5 mr-1.5" />
                                    One uppercase letter
                                </li>
                                <li className="flex items-center text-[10px] text-blue-500">
                                    <Check className="w-2.5 h-2.5 mr-1.5" />
                                    One number or special character
                                </li>
                            </ul>
                        </div>

                        <Button className="w-full h-10 bg-[#3B9DF8] hover:bg-blue-600 text-white font-semibold shadow-md text-sm rounded-md mt-4">
                            Reset Password
                        </Button>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ResetPassword;
