import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import About from './components/About';
import Footer from './components/Footer';
import OurStory from './pages/OurStory';
import Team from './components/Team';
import Blog from './pages/Blog';
import PartnerModal from './components/PartnerModal';
import Manifesto from './pages/Manifesto';

function App() {
    const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
    const [page, setPage] = useState('home');

    const handleNavigate = (targetPage: string) => {
        setPage(targetPage);
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    const renderPage = () => {
        switch (page) {
            case 'story':
                return <OurStory onNavigate={handleNavigate} />;
            case 'blog':
                return <Blog />;
            case 'manifesto':
                return <Manifesto onPartnerClick={() => setIsPartnerModalOpen(true)} />;
            case 'home':
            default:
                return (
                    <>
                        <Hero onPartnerClick={() => setIsPartnerModalOpen(true)} />
                        <HowItWorks />
                        <Impact />
                        <About />
                        <Team />
                    </>
                );
        }
    }

    return (
        <div className="bg-white text-gray-800 antialiased">
            <Header onNavigate={handleNavigate} />
            <main>
                {renderPage()}
            </main>
            <Footer onNavigate={handleNavigate} onPartnerClick={() => setIsPartnerModalOpen(true)} />
            {isPartnerModalOpen && <PartnerModal onClose={() => setIsPartnerModalOpen(false)} />}
        </div>
    );
}

export default App;