import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About-me';
import Services from './pages/Discovery';
import Projects from './pages/Projects';
import Contact from './pages/Contact-me';
import Resume from './pages/Resume';
import Discovery from './pages/Discovery';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-me" element={<About />} />
                        <Route path="/dicovery" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact-me" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/discovery" element={<Discovery />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
