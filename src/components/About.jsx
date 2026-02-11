export default function About() {
    const tools = [
        { name: 'Python', icon: './assets/python.png', },
        { name: 'R', icon: './assets/R.png', },
        { name: 'TensorFlow', icon: './assets/tensorflow.png', },
        { name: 'SQL', icon: './assets/Sql.png', },
        { name: 'DataBrick', icon: './assets/Data.png', },
        { name: 'Jupyter', icon: './assets/jupyter.png', },
        { name: 'mongodb', icon: './assets/mongodb.png', },

    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'Python, R, SQL, C++',
        },
        {
            name: 'Education',
            nsbmLogo: './assets/NSBM.jpg',
            universityLogo: './assets/Plymouth.jpg',
            description: 'BSC (Hons) In Data Science - University of Plymouth ',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built more than 5 projects',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/Yasiru.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_8px_60px_rgba(59,130,246,0.3)] flex items-center justify-center animate-pulse">
                        <div className="bg-white w-[90%] h-[90%] rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                            {/* Decorative floating dots */}
                            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
                            <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
                            
                            {/* Gradient rings */}
                            <div className="absolute inset-2 rounded-full border-2 border-gradient-to-r from-blue-200 to-purple-200 opacity-30"></div>
                            <div className="absolute inset-4 rounded-full border border-gradient-to-r from-purple-200 to-pink-200 opacity-20"></div>
                            
                            <div className="w-full h-full relative flex items-center justify-center">
                                <div className="absolute inset-4 rounded-full">
                                    <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
                                        <defs>
                                            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="50%" stopColor="#8b5cf6" />
                                                <stop offset="100%" stopColor="#ec4899" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            id="circle-text"
                                            d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                                            fill="none"
                                            stroke="none"
                                        />
                                        <text className="text-3xl font-bold" fill="url(#textGradient)">
                                            <textPath href="#circle-text">
                                                AI/ML        ENGINEER
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg z-10">
                                    <div className="text-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">I’m a Data Science undergraduate with strong real world problem solving skills and an analytical mindset, focused on AI/ML, Robotics, and AI automation. I aspire to build a professional career in AI/ML within the FinTech domain, with a strong focus on high accuracy financial model development and applied research.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((item) => (
                            <li key={item.name} className={`border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50 ${item.name === 'Education' ? '-mx-5' : ''}`}>
                                {item.name === 'Education' ? (
                                    <div className="flex items-center gap-3 mt-3">
                                        <img src={item.nsbmLogo} alt="NSBM Green University" className="w-16 h-16 object-contain rounded" />
                                        <img src={item.universityLogo} alt="University of Plymouth" className="w-16 h-16 object-contain rounded" />
                                    </div>
                                ) : (
                                    <>
                                        <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                        <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                    </>
                                )}
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}