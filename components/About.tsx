import React from 'react';

const About: React.FC = () => {
    return (
        <section className="bg-teal-700 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-teal-200 to-teal-400 border-4 border-teal-100 shadow-xl flex items-center justify-center">
                    <span className="text-5xl font-bold text-white opacity-70" aria-hidden="true">C</span>
                </div>
                <h2 className="mt-6 text-3xl font-bold">In Loving Memory of Corbin Chitwood</h2>
                <p className="mt-4 max-w-2xl mx-auto text-teal-100 text-lg">
                    Our inspiration, our drive, our reason to make smiles happen. This foundation is dedicated to honoring Corbin's generous spirit by creating a world with more reasons to smile.
                </p>
            </div>
        </section>
    );
};

export default About;