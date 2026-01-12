import React, { useEffect } from 'react';
import logo from '../assets/Intrack_logo.png';
import { Check } from 'lucide-react';
import AuthLayout from '../components/layout/AuthLayout';
import { useNavigate } from 'react-router-dom';

const ResetConfirmation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Auto redirect after 3 seconds
        const timer = setTimeout(() => {
            navigate('/login');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <AuthLayout>
            <div className="min-h-full flex flex-col items-center p-6 lg:p-8">
                <div className="w-full max-w-md flex flex-col items-center text-center space-y-6 my-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2 self-start mb-8">
                        <div className="w-12 h-12 relative shrink-0">
                            <img src={logo} alt="Inctrack Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-bold text-xl text-primary leading-tight">Inctrack</span>
                            <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Compliance Suite</span>
                        </div>
                    </div>

                    <div className="space-y-4 flex flex-col items-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <div className="w-10 h-10 bg-transparent rounded-full border-4 border-green-500 flex items-center justify-center">
                                <Check className="w-6 h-6 text-green-500" strokeWidth={3} />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Password Reset Successful!</h1>
                            <p className="text-gray-500 text-xs">Your password has been successfully updated</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-6">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Redirecting to login...
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ResetConfirmation;
