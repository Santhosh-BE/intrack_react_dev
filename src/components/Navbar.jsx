import React from 'react';
import logo from '../assets/Intrack_logo.png'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-background max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
                <div className="w-16 h-16 relative">
                    <img src={logo} alt="Inctrack Logo" className="w-full h-full object-contain" />
                    {/* Placeholder for logo based on screenshot description - will replace or use icon if needed */}
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-xl text-primary leading-tight">Inctrack</span>
                    <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Compliance Suite</span>
                </div>
            </div>
            {/* The screenshot doesn't explicitly show right-side nav items, but "Log In" is in the hero. 
                Common pattern is to have nothing or basic links. I'll stick to just the logo area 
                as per screenshot focus on the hero content. */}
        </nav>
    );
};

export default Navbar;
