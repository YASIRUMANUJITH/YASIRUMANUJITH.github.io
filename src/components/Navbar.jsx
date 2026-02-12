import { useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const handleProjectsNavigation = () => {
        navigate('/projects');
    };

    const handleNavigation = (section) => {
        if (location.pathname === '/projects') {
            // If on projects page, navigate to main page with section
            window.location.href = `/#${section}`;
        } else {
            // If on main page, use anchor link
            const element = document.getElementById(section === 'top' ? 'top' : section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Fallback: use hash navigation
                window.location.hash = section;
            }
        }
    };

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    const toggleTheme = () => {

        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            } else {
                navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            }
        })

        // -------- light mode and dark mode -----------

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-4 sm:px-6 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50">
                <div className="w-full max-w-7xl mx-auto relative flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src="./assets/Logo.png" alt="Logo" className="w-16 sm:w-20 cursor-pointer" />
                    </Link>

                    <ul ref={navLinkRef} className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 rounded-full px-8 lg:px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent absolute left-1/2 transform -translate-x-1/2">
                        <li><button className='hover:text-gray-500 dark:hover:text-gray-300 transition text-sm lg:text-base' onClick={() => handleNavigation('top')}>Home</button></li>
                        <li><button className='hover:text-gray-500 dark:hover:text-gray-300 transition text-sm lg:text-base' onClick={() => handleNavigation('about')}>About me</button></li>
                        <li><button className='hover:text-gray-500 dark:hover:text-gray-300 transition text-sm lg:text-base' onClick={() => handleNavigation('services')}>Services</button></li>
                        <li><button className='hover:text-gray-500 dark:hover:text-gray-300 transition text-sm lg:text-base' onClick={handleProjectsNavigation}>Projects</button></li>
                        <li><button className='hover:text-gray-500 dark:hover:text-gray-300 transition text-sm lg:text-base' onClick={() => handleNavigation('contact')}>Contact me</button></li>
                    </ul>

                    <div className="flex items-center gap-2 sm:gap-4 absolute right-0">
                        <button onClick={toggleTheme}>
                            <img src="./assets/moon_icon.png" alt="" className="w-4 sm:w-5 dark:hidden" />
                            <img src="./assets/sun_icon.png" alt="" className="w-4 sm:w-5 hidden dark:block" />
                        </button>

                        <a href="#contact" className="hidden lg:flex items-center gap-2 xl:gap-3 px-6 xl:px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-2 xl:ml-4 font-Ovo dark:border-white/30 text-sm xl:text-base">
                            Contact
                            <img src="./assets/arrow-icon.png" alt="" className="w-2 xl:w-3 dark:hidden" />
                            <img src="./assets/arrow-icon-dark.png" alt="" className="w-2 xl:w-3 hidden dark:block" />
                        </a>

                        <button className="block md:hidden ml-2 sm:ml-3" onClick={openMenu}>
                            <img src="./assets/menu-black.png" alt="" className="w-5 sm:w-6 dark:hidden" />
                            <img src="./assets/menu-white.png" alt="" className="w-5 sm:w-6 hidden dark:block" />
                        </button>
                    </div>
                </div>
            </nav>
            
            {/* -- ----- mobile menu ------  -- */}
            <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-16 sm:py-20 px-8 sm:px-10 fixed -right-64 top-0 bottom-0 w-60 sm:w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">
                <div className="absolute right-4 sm:right-6 top-4 sm:top-6" onClick={closeMenu}>
                    <img src="./assets/close-black.png" alt="" className="w-4 sm:w-5 cursor-pointer dark:hidden" />
                    <img src="./assets/close-white.png" alt="" className="w-4 sm:w-5 cursor-pointer hidden dark:block" />
                </div>

                <li><button onClick={() => { handleNavigation('top'); closeMenu(); }} className="text-base sm:text-lg">Home</button></li>
                <li><button onClick={() => { handleNavigation('about'); closeMenu(); }} className="text-base sm:text-lg">About me</button></li>
                <li><button onClick={() => { handleNavigation('services'); closeMenu(); }} className="text-base sm:text-lg">Services</button></li>
                <li><button onClick={() => { handleProjectsNavigation(); closeMenu(); }} className="text-base sm:text-lg">Projects</button></li>
                <li><button onClick={() => { handleNavigation('contact'); closeMenu(); }} className="text-base sm:text-lg">Contact me</button></li>
            </ul>
        </>
    )
}