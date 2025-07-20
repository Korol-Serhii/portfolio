import React from 'react';

// Компонент бічної панелі
const Sidebar = ({ t, activePage, onNavClick, isMenuOpen }) => {
    const navItems = [
        { page: 'about', key: 'navAbout' },
        { page: 'military', key: 'navMilitary' },
        { page: 'education', key: 'navEducation' },
        { page: 'courses', key: 'navCourses' },
        { page: 'portfolio', key: 'navPortfolio' },
        { page: 'contacts', key: 'navContacts' },
    ];

    return (
        <aside className={`bg-gray-800 text-gray-100 w-64 min-h-screen p-4 fixed top-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:relative z-40`}>
            <div className="flex flex-col items-center mb-8">
                <img 
                    src="/images/Foto.jpg" 
                    alt="Фото профілю" 
                    className="rounded-full w-28 h-28 border-4 border-gray-600 object-cover" 
                />
                <h2 className="text-lg font-bold mt-4 profile-name">{t.profileName}</h2>
                <p className="text-sm text-gray-400 mt-1 text-center">{t.profileTitle}</p>
            </div>
            <nav>
                <ul>
                    {navItems.map(item => (
                        <li key={item.page}>
                            <a 
                                href="#" 
                                onClick={(e) => { 
                                    e.preventDefault(); 
                                    onNavClick(item.page); 
                                }}
                                className={`nav-item ${activePage === item.page ? 'active' : ''}`}
                            >
                                {t[item.key]}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar; 