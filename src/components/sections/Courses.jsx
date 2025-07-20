import React from 'react';

const Courses = ({ t }) => {
    const handleCertificateClick = (certificatePath) => {
        window.open(`/certificates/${certificatePath}`, '_blank');
    };

    return (
        <section className="w-full">
            <h1 className="section-title text-4xl font-bold text-sky-400 mb-8 drop-shadow-lg animate-fade-in">{t.coursesTitle}</h1>
            
            {/* Програмування та ІТ */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-sky-300 mb-6 animate-fade-in">Програмування та ІТ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.programmingCourses.map((course, index) => (
                        <div 
                            key={index}
                            className="glass-card p-6 md:p-8 shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 group cursor-pointer"
                            onClick={() => handleCertificateClick(course.certificate)}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    <svg className="w-8 h-8 text-sky-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-sky-400 mb-2 group-hover:text-sky-300 transition-colors duration-300">{course.title}</h3>
                                    <p className="text-gray-400 text-sm">{course.platform}</p>
                                    <p className="text-gray-500 text-xs mt-1">{course.date}</p>
                                </div>
                            </div>
                            <div className="text-gray-300 text-sm">
                                <p className="mb-2">{course.skills}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Безпілотні системи (БПЛА) */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-sky-300 mb-6 animate-fade-in">Безпілотні системи (БПЛА)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.droneCourses.map((course, index) => (
                        <div 
                            key={index}
                            className="glass-card p-6 md:p-8 shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 group cursor-pointer"
                            onClick={() => handleCertificateClick(course.certificate)}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    <svg className="w-8 h-8 text-sky-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-sky-400 mb-2 group-hover:text-sky-300 transition-colors duration-300">{course.title}</h3>
                                    <p className="text-gray-400 text-sm">{course.platform}</p>
                                    <p className="text-gray-500 text-xs mt-1">{course.date}</p>
                                </div>
                            </div>
                            <div className="text-gray-300 text-sm">
                                <p className="mb-2">{course.skills}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Інше */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-sky-300 mb-6 animate-fade-in">Інше</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.otherCourses.map((course, index) => (
                        <div 
                            key={index}
                            className="glass-card p-6 md:p-8 shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 group cursor-pointer"
                            onClick={() => handleCertificateClick(course.certificate)}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    <svg className="w-8 h-8 text-sky-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-sky-400 mb-2 group-hover:text-sky-300 transition-colors duration-300">{course.title}</h3>
                                    <p className="text-gray-400 text-sm">{course.platform}</p>
                                    <p className="text-gray-500 text-xs mt-1">{course.date}</p>
                                </div>
                            </div>
                            <div className="text-gray-300 text-sm">
                                <p className="mb-2">{course.skills}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses; 