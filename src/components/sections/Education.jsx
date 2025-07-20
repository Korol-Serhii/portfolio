import React from 'react';

const Education = ({ t }) => (
    <section className="w-full">
        <h1 className="section-title text-4xl font-bold text-sky-400 mb-8 drop-shadow-lg animate-fade-in">{t.educationTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {t.educationItems.map((item, index) => (
                <div key={index} className="glass-card p-6 shadow-2xl hover:shadow-sky-500/20 hover:scale-105 transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-200 hover:text-sky-300 transition-colors duration-300">{item.degree}</h3>
                        </div>
                        <div className="flex-1 space-y-3">
                            <p className="text-sky-400 font-medium text-base">{item.level}</p>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.institution}</p>
                            {item.specialty && item.specialty.trim() !== "" && (
                                <p className="text-gray-400 text-sm bg-gray-700/50 px-3 py-2 rounded-lg">{item.specialty}</p>
                            )}
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-600">
                            <p className="text-gray-500 text-sm font-medium bg-sky-500/20 px-3 py-1 rounded-full inline-block">{item.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Education; 