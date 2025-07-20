import React from 'react';

const Military = ({ t }) => (
    <section className="w-full">
        <h1 className="section-title text-4xl font-bold text-sky-400 mb-8 drop-shadow-lg animate-fade-in">{t.militaryTitle}</h1>
        <div className="space-y-8 animate-fade-in-up">
            {/* Військова служба */}
            <div className="glass-card p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl font-semibold text-sky-400 mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t.militaryService}
                </h2>
                <div className="space-y-6">
                    {t.militaryServicePeriods && t.militaryServicePeriods.map((period, idx) => (
                        <div key={idx} className="border-l-4 border-sky-400 pl-6 ml-2 hover:border-sky-300 transition-colors duration-300">
                            <div className="flex items-center mb-3">
                                <span className="text-xl font-bold text-gray-100 mr-3 bg-sky-500/20 px-3 py-1 rounded-full">{period.period}</span>
                            </div>
                            <ul className="list-none ml-4 text-gray-300 space-y-2">
                                <li className="flex items-center">
                                    <span className="text-sky-400 mr-2">•</span>
                                    {period.type}
                                </li>
                                <li className="flex items-center">
                                    <span className="text-sky-400 mr-2">•</span>
                                    {period.unit}
                                </li>
                                {period.note && (
                                    <li className="flex items-center italic text-sky-300">
                                        <span className="text-sky-400 mr-2">•</span>
                                        {period.note}
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Блок нагород */}
            <div className="glass-card p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl font-semibold text-sky-400 mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {t.awardsTitle}
                </h2>
                <div className="flex flex-row-reverse flex-wrap justify-center items-end gap-6 sm:gap-8 md:gap-12 lg:gap-16 overflow-x-auto pb-12 px-4">
                    {t.awards && t.awards.map((award, idx) => (
                        <div key={idx} className="flex flex-col items-center min-w-[140px] max-w-[180px] transition-all duration-300 hover:scale-105 hover:drop-shadow-lg p-3">
                            <div className="relative flex items-end justify-center bg-white rounded-full border-4 border-sky-400 shadow-xl w-28 h-28 sm:w-32 sm:h-32 overflow-hidden mb-4 group">
                                <img src={`/images/${award.img}`} alt={award.title} className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="text-center text-gray-100 text-sm font-semibold leading-tight px-2 break-words h-16 flex flex-col justify-center">
                                {award.title.split(' ').length > 2
                                    ? award.title
                                    : <>{award.title}<br className="block" /></>}
                            </div>
                            <div className="text-center text-gray-400 text-xs sm:text-sm mt-1 font-medium">{award.year}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Навички */}
            <div className="glass-card p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl font-semibold text-sky-400 mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    {t.militarySkills}
                </h2>
                <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                    <li className="flex items-start">
                        <span className="text-sky-400 mr-3 mt-1">•</span>
                        <span>{t.militarySkill1}</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-sky-400 mr-3 mt-1">•</span>
                        <span>{t.militarySkill2}</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-sky-400 mr-3 mt-1">•</span>
                        <span>{t.militarySkill3}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);

export default Military; 