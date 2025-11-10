import React from 'react';

interface HeroProps {
    onPartnerClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPartnerClick }) => {
    return (
        <section className="relative bg-teal-50">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Clean and modern healthcare clinic background" 
                    className="w-full h-full object-cover opacity-20"
                    loading="lazy"
                />
            </div>
            <div className="relative container mx-auto px-6 py-20 sm:py-24 md:py-32 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Turn Empty Rooms into <span className="text-teal-600">Life-Changing Care</span>.
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
                    We transform unused hotel and casino rewards into free oral surgery scholarships for those in need, creating a legacy of smiles in honor of Corbin Chitwood.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="https://buy.stripe.com/8x2dRbgif0FC9TO8Go7AI03" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-lg">
                        Support Our Mission
                    </a>
                    <button onClick={onPartnerClick} className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-teal-700 bg-white border-2 border-teal-600 rounded-full hover:bg-teal-50 transition-transform transform hover:scale-105">
                        Become a Partner
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;