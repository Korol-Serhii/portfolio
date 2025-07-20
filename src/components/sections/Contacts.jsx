import React from 'react';

const Contacts = ({ t }) => (
    <section className="w-full">
        <h1 className="section-title text-4xl font-bold text-sky-400 mb-8 drop-shadow-lg animate-fade-in">{t.contactsTitle}</h1>
        <div className="flex justify-center animate-fade-in-up">
            <div className="glass-card p-8 md:p-10 max-w-lg mx-auto shadow-2xl hover:shadow-sky-500/10 transition-all duration-300">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033zm-.089 1.438a4.001 4.001 0 012.15 2.15l1.415-1.415a6 6 0 00-3.565-3.565l-1.415 1.415z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-center text-xl mb-6 text-gray-300 leading-relaxed">{t.contactPrompt}</p>
                </div>
                <div className="space-y-6">
                    {/* LinkedIn */}
                    <div className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group">
                        <svg className="w-8 h-8 mr-4 text-sky-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg> 
                        <a href="https://linkedin.com/in/serhii-korol-742020376" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 text-lg font-medium">{t.linkedinProfile}</a>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group">
                        <svg className="w-8 h-8 mr-4 text-sky-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg> 
                        <a href="mailto:king0sv0@gmail.com" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 text-lg font-medium">king0sv0@gmail.com</a>
                    </div>
                    
                    {/* GitHub */}
                    <div className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group">
                        <svg className="w-8 h-8 mr-4 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
                        </svg> 
                        <a href="https://github.com/Korol-Serhii" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 text-lg font-medium">{t.githubProfile}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contacts; 