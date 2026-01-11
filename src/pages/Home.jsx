import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary-50">
            <h1 className="text-4xl font-bold text-primary-600 mb-4 font-sans">Welcome to InTrack</h1>
            <p className="text-lg text-secondary mb-8">React + Vite + Tailwind CSS</p>

            {/* Example Button using Primary Color */}
            <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg">
                Get Started
            </button>

            <div className="mt-8 p-4 border-2 border-lovely rounded text-lovely">
                Lovely Color Box
            </div>
        </div>
    );
};

export default Home;
