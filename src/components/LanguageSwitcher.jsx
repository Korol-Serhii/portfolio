import React from 'react';

// Компонент перемикача мови
const LanguageSwitcher = ({ language, setLanguage }) => (
    <div className="flex items-center space-x-2">
        <button 
            onClick={() => setLanguage('uk')}
            className={`text-sm font-medium py-1 px-2 rounded transition duration-200 ${
                language === 'uk' 
                    ? 'bg-sky-600 text-white' 
                    : 'hover:bg-sky-700 text-gray-300'
            }`}
        >
            УКР
        </button>
        <button 
            onClick={() => setLanguage('en')}
            className={`text-sm font-medium py-1 px-2 rounded transition duration-200 ${
                language === 'en' 
                    ? 'bg-sky-600 text-white' 
                    : 'hover:bg-sky-700 text-gray-300'
            }`}
        >
            ENG
        </button>
    </div>
);

export default LanguageSwitcher; 