import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="min-h-screen lg:h-screen bg-white font-sans flex flex-col lg:overflow-hidden">
            <Navbar />
            <main className="flex-1 flex flex-col justify-start lg:justify-center lg:items-center lg:min-h-0 scale-content-short">
                <Hero />
            </main>
            {/* Background decoration - optional based on design (screenshot has some faint circles) */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl opacity-60"></div>
            </div>
        </div>
    );
};

export default Home;
