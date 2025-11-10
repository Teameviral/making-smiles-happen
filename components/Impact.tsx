import React from 'react';

const Impact: React.FC = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Unlocking Billions for a Healthier Future</h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Our innovative model is designed to unlock a <span className="font-bold text-teal-600">$100B bottleneck</span> in the hospitality industry and redirect it into vital healthcare access.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Every 6-week cycle, our program not only funds essential surgeries for patients in need but also supports hands-on training for students and professionals, creating a lasting impact on community health.
                        </p>
                        <div className="mt-8 flex space-x-8">
                            <div>
                                <p className="text-4xl font-bold text-teal-600">100%</p>
                                <p className="text-gray-500">of Proceeds Fund Surgeries</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-teal-600">$0</p>
                                <p className="text-gray-500">Cost to Hotel Partners</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1599045118108-bf9954418b76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                            alt="A diverse group of people smiling happily" 
                            className="rounded-xl shadow-2xl w-full" 
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;