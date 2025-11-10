import React from 'react';
import GeminiClarifier from '../components/GeminiClarifier';

interface OurStoryProps {
    onNavigate: (page: string) => void;
}

const StatCard: React.FC<{ value: string, label: string }> = ({ value, label }) => (
    <div className="bg-teal-500/10 p-6 rounded-lg text-center">
        <p className="text-4xl md:text-5xl font-bold text-teal-600">{value}</p>
        <p className="mt-2 text-gray-600">{label}</p>
    </div>
);

const ValueCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);


const OurStory: React.FC<OurStoryProps> = ({ onNavigate }) => {
    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <section className="text-center py-20 px-4 bg-white">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Story</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                    A revolutionary approach to healthcare funding born from love, loss, and the unwavering belief that everyone deserves to smile with confidence.
                </p>
            </section>

            {/* Corbin's Story */}
            <section className="py-20 px-4">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900">The Inspiration Behind Our Mission</h2>
                        <p className="mt-4 text-gray-600">
                            Corbin Chitwood was more than inspiration—he was proof that every person deserves to smile with confidence. When faced with a <strong>$42,000 quote for oral surgery</strong> from predatory providers, Corbin's story became the catalyst for something revolutionary.
                        </p>
                        <p className="mt-4 text-gray-600">
                           Instead of accepting a system built on financial barriers, we decided to build something better. A system where generosity creates abundance, where unused resources become healing opportunities, and where every smile tells a story of community care.
                        </p>
                         <blockquote className="mt-6 pl-4 border-l-4 border-teal-500 text-gray-700 italic">
                           "My love for him promises to connect as many people as possible to their smile and ways to help someone else smile too."
                        </blockquote>
                    </div>
                     <div className="flex flex-col items-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-200 to-teal-400 border-8 border-white shadow-2xl flex items-center justify-center">
                            <span className="text-8xl font-bold text-white opacity-70" aria-hidden="true">C</span>
                        </div>
                         <p className="text-center italic text-gray-500 mt-4">"The first smile gifted by our organization and the man who inspired this project."</p>
                    </div>
                </div>
            </section>

             {/* Impact Metrics */}
            <section className="bg-white py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <StatCard value="71" label="Smiles created every 6 weeks" />
                        <StatCard value="1,420" label="Students & professionals trained per cycle" />
                        <StatCard value="$6M" label="Value created from donated resources" />
                    </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="py-20 px-4">
                <div className="container mx-auto grid md:grid-cols-2 gap-12">
                    <div className="bg-teal-600 text-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold">Our Mission</h3>
                        <p className="mt-4 text-teal-100">To transform unused hospitality resources into sustainable funding for oral surgery education, creating a self-perpetuating cycle that serves students, professionals, patients, and partners.</p>
                    </div>
                     <div className="bg-teal-700 text-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold">Our Vision</h3>
                        <p className="mt-4 text-teal-100">A world where wasted resources become opportunities, where healthcare education is accessible, and where every smile created inspires another act of generosity.</p>
                    </div>
                </div>
            </section>
            
            {/* How It Works */}
            <section className="bg-white py-20 px-4">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How Our System Works</h2>
                </div>
                <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center p-4">
                        <div className="flex items-center justify-center h-16 w-16 bg-teal-100 text-teal-600 rounded-full font-bold text-2xl">1</div>
                        <h4 className="mt-4 font-bold">Accommodation Donations</h4>
                        <p className="mt-2 text-gray-600">Partners donate unused casino rewards, hotel stays, and accommodations.</p>
                    </div>
                     <div className="flex flex-col items-center p-4">
                        <div className="flex items-center justify-center h-16 w-16 bg-teal-100 text-teal-600 rounded-full font-bold text-2xl">2</div>
                        <h4 className="mt-4 font-bold">$100 Sales</h4>
                        <p className="mt-2 text-gray-600">Accommodations sold at a fixed $100 price, making travel affordable.</p>
                    </div>
                     <div className="flex flex-col items-center p-4">
                        <div className="flex items-center justify-center h-16 w-16 bg-teal-100 text-teal-600 rounded-full font-bold text-2xl">3</div>
                        <h4 className="mt-4 font-bold">Scholarship Funding</h4>
                        <p className="mt-2 text-gray-600">Revenue funds 6-week intensive oral surgery training programs.</p>
                    </div>
                     <div className="flex flex-col items-center p-4">
                        <div className="flex items-center justify-center h-16 w-16 bg-teal-100 text-teal-600 rounded-full font-bold text-2xl">4</div>
                        <h4 className="mt-4 font-bold">Smiles Created</h4>
                        <p className="mt-2 text-gray-600">71 people receive life-changing oral surgery every 6 weeks.</p>
                    </div>
                </div>
            </section>
            
            {/* Values */}
             <section className="py-20 px-4">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Values</h2>
                </div>
                <div className="container mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   <ValueCard title="People Over Profits" description="We prioritize human welfare while creating a more profitable system for everyone involved." />
                   <ValueCard title="Self-Sustaining Model" description="Our innovative approach ensures long-term sustainability without depleting resources." />
                   <ValueCard title="Community-Driven" description="Every stakeholder benefits while contributing to a greater mission of creating smiles." />
                   <ValueCard title="Innovation in Healthcare" description="Transforming healthcare education through creative resource allocation and partnerships." />
                </div>
             </section>

            {/* Gemini Clarifier */}
            <GeminiClarifier />
            
            {/* Unreachable Star Initiative */}
            <section className="bg-gray-800 text-white py-20 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl font-bold">The Unreachable Star Initiative</h2>
                     <blockquote className="mt-6 text-lg text-gray-300 italic">
                        "There is no place in the Universe that the Blessings of a Good Deed can't reach."
                    </blockquote>
                    <p className="mt-4 text-gray-400">
                        This is our solemn promise. Beyond smiles, beyond scholarships, we are building a remote resource system for humanity. For every soul facing systematic oppression, abuse, starvation, or extermination, our network will be a lifeline.
                    </p>
                    <p className="mt-4 text-gray-400">
                       We will deploy communication and resource networks that bypass corrupt channels, delivering support directly to those in need, preserved from manipulation and greed. The Unreachable Star Initiative is our commitment to ensure that the light of human kindness and the power of good deeds will always find a way.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default OurStory;