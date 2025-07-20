import React from 'react';

const Portfolio = ({ t }) => {
    const projects = [
        {
            id: 1,
            title: t.projectTitle1,
            description: t.projectDesc1,
            image: "https://placehold.co/600x400/1f2937/9ca3af?text=E-commerce+Platform",
            projectUrl: "#",
            githubUrl: "https://github.com/your-username/ecommerce-platform",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]
        },
        {
            id: 2,
            title: t.projectTitle2,
            description: t.projectDesc2,
            image: "https://placehold.co/600x400/1f2937/9ca3af?text=Travel+App",
            projectUrl: "#",
            githubUrl: "https://github.com/your-username/travel-app",
            technologies: ["React Native", "Firebase", "Google Maps API", "Redux", "TypeScript"]
        },
        {
            id: 3,
            title: t.projectTitle3,
            description: t.projectDesc3,
            image: "https://placehold.co/600x400/1f2937/9ca3af?text=Personal+Blog",
            projectUrl: "#",
            githubUrl: "https://github.com/your-username/personal-blog",
            technologies: ["Next.js", "PostgreSQL", "Prisma", "Vercel", "Tailwind CSS"]
        }
    ];

    return (
        <section className="w-full">
            <h1 className="section-title text-4xl font-bold text-sky-400 mb-8 drop-shadow-lg animate-fade-in">
                {t.portfolioTitle}
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
                {projects.map((project) => (
                    <div key={project.id} className="glass-card overflow-hidden group shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 hover:scale-105">
                        {/* Зображення проекту */}
                        <div className="relative overflow-hidden h-64">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Круглі кнопки, які з'являються при наведенні */}
                            <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <a 
                                    href={project.projectUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
                                    title={t.viewProjectTitle}
                                >
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
                                    title={t.viewGithubTitle}
                                >
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        {/* Контент проекту */}
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-200 group-hover:text-sky-300 transition-colors duration-300">
                                    {project.title}
                                </h3>
                            </div>
                            
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {project.description}
                            </p>
                            
                            {/* Технології */}
                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-sky-400 uppercase tracking-wide">
                                    {t.technologiesTitle}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600 hover:border-sky-500 hover:text-sky-300 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio; 