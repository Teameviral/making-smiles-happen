
import React from 'react';
import { HotelIcon, DollarIcon, HeartIcon } from './icons';

const StepCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
        <div className="flex-shrink-0 bg-teal-100 p-4 rounded-full">
            {icon}
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Simple Model for a Big Impact</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We've created a self-sustaining cycle of giving that benefits everyone involved—hotels, families, and patients.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-12">
                    <StepCard
                        icon={<HotelIcon />}
                        title="1. Hotels Donate Rooms"
                        description="Hotels & casinos provide API access to unused rooms about to expire, receiving a tax-deductible donation for their contribution."
                    />
                    <StepCard
                        icon={<DollarIcon />}
                        title="2. Families Get a Deal"
                        description="We list these rooms on our site for a flat, affordable rate. Families enjoy discounted stays, making travel more accessible."
                    />
                    <StepCard
                        icon={<HeartIcon />}
                        title="3. Lives are Changed"
                        description="100% of the proceeds directly fund oral surgery scholarships, providing critical care and training for the next generation of professionals."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
