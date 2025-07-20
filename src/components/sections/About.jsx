import React from 'react';

const About = ({ t }) => (
  <section className="w-full">
    <h1 className="section-title text-4xl font-bold text-sky-400 mb-8 drop-shadow-lg animate-fade-in">{t.aboutTitle}</h1>
    <div className="flex flex-col md:flex-row gap-10 items-start w-full">
      {/* Ліва колонка: фото + мови */}
      <div className="flex flex-col items-center md:w-1/3 w-full">
        <div className="relative group mb-6">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-sky-500 via-sky-400 to-blue-400 opacity-80 blur-lg group-hover:scale-105 group-hover:opacity-100 transition-all duration-300"></div>
          <img
            src="/images/Foto.jpg"
            alt="Фотографія"
            className="rounded-2xl w-full object-cover shadow-2xl border-4 border-gray-800 relative z-10 transition-transform duration-300 group-hover:scale-105"
            style={{ maxWidth: '22rem', aspectRatio: '3/4', minHeight: '320px', background: '#222' }}
          />
        </div>
        <div className="glass-card w-full max-w-md px-4 py-3 mb-4 mt-2 animate-fade-in-up">
          <h2 className="font-bold text-lg text-sky-300 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z" /></svg>
            {t.languagesTitle}
          </h2>
          <ul className="grid grid-cols-1 gap-2">
            <li className="lang-card">{t.languageUkr}</li>
            <li className="lang-card">{t.languageRu}</li>
            <li className="lang-card">{t.languageEn}</li>
            <li className="lang-card">{t.languageJp}</li>
          </ul>
        </div>
      </div>
      {/* Права колонка: текст */}
      <div className="md:w-2/3 w-full animate-fade-in-up">
        <div className="glass-card p-6 md:p-8 text-lg text-gray-100 space-y-8 shadow-2xl">
          <p className="mb-2 leading-relaxed text-xl font-medium text-gray-200 drop-shadow-sm">{t.aboutText1}</p>
          <hr className="border-gray-500 my-4 w-full" />
          <div 
            className="space-y-8 prose prose-invert max-w-none text-base md:text-lg" 
            style={{ 
              color: '#fff',
              '--tw-prose-hr': 'border-gray-500 my-4 w-full'
            }} 
            dangerouslySetInnerHTML={{ __html: t.aboutText2 }} 
          />
        </div>
      </div>
    </div>
  </section>
);

export default About; 