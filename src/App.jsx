import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import GalleryPage from './GalleryPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

    const [page, setPage] = useState();

    function handleNavClick(location) {
        setPage(location);
    }

    function showPage() {
        if (page === "Home") {
            return <HomePage />
        } else if (page === "Contact") {
            return <ContactPage />
        } else if (page === "Gallery") {
            return <GalleryPage />
        }
    }

    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link hrtoef="/gallery">Gallery</Link></li>
                    </ul>
                </nav>
                <main style={{border: "1px solid grey", minHeight: "300px"}}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                    </Routes>
                </main>
            </>
        </BrowserRouter>
    );
 
}

export default App
