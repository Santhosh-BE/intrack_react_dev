import React from 'react';
import { Button } from "@/components/ui/button";
import FeatureCard from './FeatureCard';
import { Bell, Building2, Users, TriangleAlert, Check } from 'lucide-react';

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

const Hero = () => {
    return (
        <section className="container mx-auto px-6 py-12 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-8 pt-4">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl tracking-tight text-gray-800 leading-[1.25]">
                            Compliance Made Simple <br />
                            Renewals Made <br />
                            Automatic.
                        </h1>
                        <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                            Inctrack helps compliance agencies and organizations track equipment, inspections, and renewal deadlines - all in one place.
                            Stay compliant, avoid penalties, and manage multiple facilities effortlessly with smart reminders and centralized control.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button className="bg-[#3B9DF8] hover:bg-blue-600 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
                            Log In
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4 text-xs md:text-sm font-medium text-gray-500">
                        <div className="flex items-center gap-2">
                            <span className="text-red-500 font-bold">&#10003;</span> Never miss renewals
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-red-500 font-bold">&#10003;</span> Centralized compliance
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-red-500 font-bold">&#10003;</span> Smart reminders
                        </div>
                    </div>
                </div>

                {/* Right Column: Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="h-full">
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
