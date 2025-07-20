import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import Sidebar from './components/Sidebar';
import LanguageSwitcher from './components/LanguageSwitcher';
import About from './components/sections/About';
import Military from './components/sections/Military';
import Education from './components/sections/Education';
import Courses from './components/sections/Courses';
import Portfolio from './components/sections/Portfolio';
import Contacts from './components/sections/Contacts';

// Головний компонент програми
export default function App() {
    const [page, setPage] = useState('about');
    const [language, setLanguage] = useState('uk');
    const [isMenuOpen, setMenuOpen] = useState(false);

    const t = translations[language];

    const handleNavClick = (pageName) => {
        setPage(pageName);
        if (window.innerWidth < 768) {
            setMenuOpen(false);
        }
    };

    const renderPage = () => {
        switch (page) {
            case 'about': return <About t={t} />;
            case 'military': return <Military t={t} />;
            case 'education': return <Education t={t} />;
            case 'courses': return <Courses t={t} />;
            case 'portfolio': return <Portfolio t={t} />;
            case 'contacts': return <Contacts t={t} />;
            default: return <About t={t} />;
        }
    };
    
    // Додаємо/забираємо клас для стилізації body
    useEffect(() => {
        document.body.className = 'bg-gray-900 text-gray-200';
    }, []);

    return (
        <div className="flex">
            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            <Sidebar t={t} activePage={page} onNavClick={handleNavClick} isMenuOpen={isMenuOpen} />

            <div className="flex-1 flex flex-col min-h-screen">
                {/* Header for mobile */}
                <header className="md:hidden flex justify-between items-center p-4 bg-gray-800 sticky top-0 z-20">
                    <button 
                        onClick={() => setMenuOpen(!isMenuOpen)} 
                        className="text-white focus:outline-none hover:text-sky-400 transition-colors duration-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <LanguageSwitcher language={language} setLanguage={setLanguage} />
                </header>
                
                {/* Language switcher for desktop */}
                <div className="hidden md:flex justify-end p-4">
                    <LanguageSwitcher language={language} setLanguage={setLanguage} />
                </div>

                <main className="flex-1 p-6 md:p-10">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
} 