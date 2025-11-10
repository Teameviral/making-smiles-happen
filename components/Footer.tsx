import React from 'react';

interface FooterProps {
    onNavigate: (page: string) => void;
    onPartnerClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onPartnerClick }) => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-white">Making Smiles Happen Foundation</h3>
                        <p className="mt-2 text-gray-400">Transforming unused hotel rewards into life-changing oral surgery scholarships.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
                            <li><button onClick={() => onNavigate('story')} className="hover:text-white transition-colors">Our Story</button></li>
                             <li><button onClick={() => onNavigate('manifesto')} className="hover:text-white transition-colors">Manifesto</button></li>
                             <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">Blog</button></li>
                            <li><button onClick={onPartnerClick} className="hover:text-white transition-colors">For Partners</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Legal</h3>
                        <p className="mt-2 text-gray-400">
                            Making Smiles Happen Foundation is an official 501(c)(3) nonprofit foundation.
                        </p>
                        <p className="mt-1 text-gray-500">EIN: 39-4416179</p>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Making Smiles Happen Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;