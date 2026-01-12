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
                <CardHeader className="space-y-2 p-4 pb-2">
                    <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center",
                        isBlue ? "bg-white/20 text-white" : "bg-gray-50 text-gray-600"
                    )}>
                        {Icon && <Icon className="w-4 h-4" />}
                    </div>
                    <CardTitle className={cn(
                        "text-base font-bold",
                        isBlue ? "text-white" : "text-gray-900"
                    )}>
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                    <CardDescription className={cn(
                        "text-xs",
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
