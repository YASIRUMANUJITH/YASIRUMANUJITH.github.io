export default function Services() {
    const services = [
        {
            name: 'AI/ML Learning Solutions',
            icon: './assets/web-icon.png',    
            description: 'Advanced AI and machine learning solutions for intelligent data analysis and automated decision making.\n\n• Predictive modeling to forecast outcomes\n• Classification and detection systems\n• Time series forecasting.',
            link: '#',
        },
        {
            name: 'Algorithmic Trading & Investment Solutions', 
            icon: './assets/mobile-icon.png',
            description: 'Build automated trading strategies, optimize portfolios, and forecast market trends.\n\n• Stock, forex, and crypto price prediction \n• Automated trading strategies',
            link: '#',
        },
        {
            name: 'Risk Assessment & Fraud Detection',
            icon: './assets/ui-icon.png',
            description: 'Creating interactive dashboards and compelling visualizations to communicate data stories effectively.\n\n• Credit Risk Modeling\n• Fraud Detection',
            link: '#',
        },
        {
            name: 'Data Visualization',
            icon: './assets/graphics-icon.png',
            description: 'Create interactive dashboards and charts to turn complex data into clear, actionable insights.\n\n• Interactive dashboards for financial data\n• Data storytelling for stakeholders\n• Real-time data visualization',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I specialize in transforming raw data into actionable insights using Python, R, SQL, and C++. With expertise in data science methodologies, I help businesses make data-driven decisions.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80 whitespace-pre-line">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}