import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import GalleryPage from './GalleryPage';

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
        <>
            <nav>
                <ul>
                    <li><button onClick={()=>handleNavClick("Home")}>Home</button></li>
                    <li><button onClick={()=>handleNavClick("Contact")}>Contact</button></li>
                    <li><button onClick={()=>handleNavClick("Gallery")}>Gallery</button></li>
                </ul>
            </nav>
            <main style={{border: "1px solid grey", minHeight: "300px"}}>
                {showPage()}
            </main>
        </>
    );
 
}

export default App
