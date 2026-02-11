import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectsGallery() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: 'FinTech Credit Risk Model',  
            category: 'FinTech',
            image: './assets/work-1.png',
            shortDescription: 'AI-driven financial risk assessment',
            fullDescription: 'Advanced FinTech solution for credit risk modeling and fraud detection. Leverages machine learning algorithms to assess creditworthiness, predict default risks, and identify fraudulent transactions in real-time financial systems.',
            technologies: ['Python', 'TensorFlow', 'XGBoost', 'SQL', 'APIs'],
            githubLink: 'https://github.com/your-username/fintech-risk-model',
            liveDemo: 'https://your-fintech-demo.herokuapp.com'
        },
        {
            id: 2,
            name: 'Data Analysis Dashboard',  
            category: 'Data Science',
            image: './assets/work-1.png',
            shortDescription: 'Python-based analytics dashboard',
            fullDescription: 'A comprehensive data analysis dashboard built with Python, Pandas, and Plotly. Features real-time data visualization, automated reporting, and interactive charts for business intelligence.',
            technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
            githubLink: 'https://github.com/your-username/data-dashboard',
            liveDemo: 'https://your-dashboard.streamlit.app'
        },
        {
            id: 3,
            name: 'USA Real Estate Market Data Visualization',
            category: 'Data Science',
            image: './assets/Project2.png', 
            shortDescription: 'Predictive analytics model',
            fullDescription: 'A comprehensive AI/ML solution featuring:\n• Predictive modeling to forecast trends and outcomes\n• Classification and detection systems\n• Time series forecasting\n\nImplemented using Random Forest and XGBoost algorithms, achieving 92% accuracy in predicting market trends with comprehensive feature engineering.',
            technologies: ['R', 'Random Forest', 'XGBoost', 'Model Evaluation'],
            githubLink: 'https://github.com/your-username/ml-prediction',
            liveDemo: 'https://your-ml-demo.herokuapp.com'
        },
        {
            id: 4,
            name: 'SQL Database Optimization',
            category: 'Database',
            image: './assets/work-3.png',
            shortDescription: 'Database performance optimization',
            fullDescription: 'Optimized complex SQL queries and database schema design resulting in 40% performance improvement. Implemented indexing strategies and query optimization techniques.',
            technologies: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB'],
            githubLink: 'https://github.com/your-username/sql-optimization',
            liveDemo: null
        },
        {
            id: 5,
            name: 'R Statistical Analysis',
            category: 'Statistics',
            image: './assets/work-4.png',
            shortDescription: 'Statistical research project',
            fullDescription: 'Comprehensive statistical analysis using R for academic research. Applied advanced statistical methods including regression analysis, hypothesis testing, and data modeling.',
            technologies: ['R', 'RStudio', 'ggplot2', 'dplyr'],
            githubLink: 'https://github.com/your-username/r-statistics',
            liveDemo: 'https://rpubs.com/your-username/statistical-analysis'
        },
        {
            id: 6,
            name: 'C++ Algorithm Implementation',
            category: 'Programming',
            image: './assets/work-1.png',
            shortDescription: 'High-performance algorithms',
            fullDescription: 'Implementation of advanced algorithms and data structures in C++ for computational efficiency. Includes sorting algorithms, graph algorithms, and dynamic programming solutions.',
            technologies: ['C++', 'STL', 'Boost', 'CMake'],
            githubLink: 'https://github.com/your-username/cpp-algorithms',
            liveDemo: null
        },
        {
            id: 7,
            name: 'Data Visualization Project',
            category: 'Visualization',
            image: './assets/work-2.png',
            shortDescription: 'Interactive data visualizations',
            fullDescription: 'Created interactive data visualizations using D3.js and Python. Features dynamic charts, real-time updates, and responsive design for various data types.',
            technologies: ['D3.js', 'Python', 'JavaScript', 'HTML/CSS'],
            githubLink: 'https://github.com/your-username/data-visualization',
            liveDemo: 'https://your-dataviz.netlify.app'
        }
    ];

    const openProjectModal = (project) => {
        setSelectedProject(project);
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-darkTheme">
            {/* Header */}
            <div className="w-full px-[12%] py-20 pt-32">
                <div className="text-center mb-8">
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm mb-4"
                    >
                        ← Back to Portfolio
                    </Link>
                </div>
                <h1 className="text-center text-6xl font-Ovo mb-4">My Projects</h1>
                <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300">
                    Explore my portfolio of data science and programming projects. Click on any project to view detailed information, technologies used, and live demos.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="w-full px-[12%] pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            onClick={() => openProjectModal(project)}
                            className="bg-white dark:bg-darkHover rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700"
                        >
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
                                <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                                    <span className="text-white text-sm font-medium px-3 py-1 bg-blue-600 rounded-full m-4">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.shortDescription}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs text-gray-500 dark:text-gray-400">+{project.technologies.length - 3} more</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-darkHover rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
                        {/* Modal Header */}
                        <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${selectedProject.image})` }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <button 
                                onClick={closeProjectModal}
                                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                            >
                                ✕
                            </button>
                            <div className="absolute bottom-6 left-6">
                                <span className="text-white text-sm font-medium px-3 py-1 bg-blue-600 rounded-full">
                                    {selectedProject.category}
                                </span>
                                <h2 className="text-white text-3xl font-bold mt-2">{selectedProject.name}</h2>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">About This Project</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        {selectedProject.fullDescription}
                                    </p>
                                    
                                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.technologies.map((tech) => (
                                            <span key={tech} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Project Links</h4>
                                    <div className="space-y-3">
                                        {selectedProject.githubLink && (
                                            <a 
                                                href={selectedProject.githubLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                                            >
                                                <span className="text-2xl">🔗</span>
                                                <div>
                                                    <div className="font-medium text-gray-800 dark:text-white">View Code</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">GitHub Repository</div>
                                                </div>
                                            </a>
                                        )}
                                        {selectedProject.liveDemo && (
                                            <a 
                                                href={selectedProject.liveDemo} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                            >
                                                <span className="text-2xl">🚀</span>
                                                <div>
                                                    <div className="font-medium text-gray-800 dark:text-white">Live Demo</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">View live project</div>
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}