import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from '../assets/Intrack_logo.png';
import { Mail, ArrowLeft } from 'lucide-react';
import AuthLayout from '../components/layout/AuthLayout';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <AuthLayout>
            <div className="min-h-full flex flex-col justify-center items-center p-6 lg:p-12">
                <div className="w-full max-w-md space-y-6">
                    {/* Logo & Back Link */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 relative shrink-0">
                                <img src={logo} alt="Inctrack Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-primary leading-tight">Inctrack</span>
                                <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Compliance Suite</span>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/login')}
                            className="flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Login
                        </button>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">Forgot Password?</h1>
                        <p className="text-gray-500 text-sm">No worries! Enter your email and we'll send you a reset link</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/reset-password'); }}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    className="pl-10 h-10 bg-gray-50 border-gray-100 focus:bg-white transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <Button className="w-full h-11 bg-[#3B9DF8] hover:bg-blue-600 text-white font-semibold shadow-md text-base rounded-md mt-5">
                            Send Reset Link
                        </Button>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ForgotPassword;
