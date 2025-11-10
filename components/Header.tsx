import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './icons';

interface HeaderProps {
    onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (page: string) => {
        onNavigate(page);
        setIsMenuOpen(false);
    };
    
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM7.293 11.707a1 1 0 011.414 0L10 13.086l1.293-1.379a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl font-bold text-gray-800">Making Smiles Happen</span>
                </button>
                <nav className="hidden md:flex items-center space-x-6">
                     <button onClick={() => handleNavClick('story')} className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">
                        Our Story
                    </button>
                     <button onClick={() => handleNavClick('manifesto')} className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">
                        Manifesto
                    </button>
                    <button onClick={() => handleNavClick('blog')} className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">
                        Blog
                    </button>
                    <a href="https://calendly.com/chitwoodkathrynd/30min" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium text-teal-600 border border-teal-600 rounded-full hover:bg-teal-50 transition-colors">
                        Schedule a Call
                    </a>
                    <a href="https://buy.stripe.com/8x2dRbgif0FC9TO8Go7AI03" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors shadow-md">
                        Donate Now
                    </a>
                </nav>
                 <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
             {isMenuOpen && (
                <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full px-6 pb-6 border-t border-gray-100">
                    <div className="flex flex-col space-y-4 pt-4">
                         <button onClick={() => handleNavClick('story')} className="text-gray-700 hover:text-teal-600 transition-colors py-2 text-left font-medium">
                            Our Story
                        </button>
                        <button onClick={() => handleNavClick('manifesto')} className="text-gray-700 hover:text-teal-600 transition-colors py-2 text-left font-medium">
                            Manifesto
                        </button>
                         <button onClick={() => handleNavClick('blog')} className="text-gray-700 hover:text-teal-600 transition-colors py-2 text-left font-medium">
                            Blog
                        </button>
                        <a href="https://calendly.com/chitwoodkathrynd/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-4 py-2 font-medium text-teal-600 border border-teal-600 rounded-full hover:bg-teal-50 transition-colors">
                            Schedule a Call
                        </a>
                        <a href="https://buy.stripe.com/8x2dRbgif0FC9TO8Go7AI03" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-4 py-2 font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors shadow-md">
                            Donate Now
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;