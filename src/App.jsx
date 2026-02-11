import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import ProjectsGallery from './components/ProjectsGallery'

// Main Portfolio Page Component
function MainPortfolio() {
    useEffect(() => {
        // Handle hash navigation when page loads
        const hash = window.location.hash.substring(1);
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    return (
        <>
            <LenisScroll />
            <div id="top">
                <Header />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="work">
                <Work />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPortfolio />} />
                <Route path="/projects" element={<ProjectsGallery />} />
            </Routes>
        </Router>
    )
}