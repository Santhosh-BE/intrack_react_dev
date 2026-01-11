import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, variant = "default" }) => {
    const isBlue = variant === "blue";

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
        >
            <Card className={cn(
                "h-full transition-colors duration-300",
                isBlue ? "bg-[#3B9DF8] text-white border-transparent shadow-lg" : "bg-white hover:shadow-xl border-gray-100"
            )}>
                <CardHeader className="space-y-4">
                    <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        isBlue ? "bg-white/20 text-white" : "bg-gray-50 text-gray-600"
                    )}>
                        {Icon && <Icon className="w-5 h-5" />}
                    </div>
                    <CardTitle className={cn(
                        "text-lg font-bold",
                        isBlue ? "text-white" : "text-gray-900"
                    )}>
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className={cn(
                        "text-sm leading-relaxed",
                        isBlue ? "text-blue-50" : "text-gray-500"
                    )}>
                        {description}
                    </CardDescription>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default FeatureCard;
