import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Report from './components/Report';
import './App.css';
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/report" element={<Report />} />
                </Routes>
                <main>
                    <section className="sectionone">
                    <div className="home-hero-content">
                        <h2 className="home-caption1">
                        Empower Your Business with Real-time Analytics
                        </h2>
                        <p className="home-text09">
                        Get instant updates, accurate forecasts, and actionable insights
                        to drive your business forward
                        </p>
                        <Link to="/sign-up" className="home-hero-cta button">
                        Get Started
                        </Link>
                    </div>
                    </section>

                    <section className="home-notes">
                    <div className="home-first">
                        <div className="home-content">
                        <h2 className="home-header1">Revolutionize Your Data Analysis</h2>
                        <div className="home-list">
                            <div className="home-note">
                            <div className="home-point"></div>
                            <p className="home-text14">
                                Harness the power of advanced AI for real-time insights
                            </p>
                            </div>
                            <div className="home-note1">
                            <div className="home-point1"></div>
                            <p className="home-text15">
                                Intuitive dashboard for comprehensive business overview
                            </p>
                            </div>
                        </div>
                        </div>
                        <img
                        alt="Data analytics dashboard"
                        src="/notes-1-1400w.png"
                        className="image-notes"
                        />
                    </div>

                    <div className="home-second">
                        <img
                        alt="Product forecast tool"
                        src="/notes-2-1400w.png"
                        className="image-notes"
                        />
                        <div className="home-content1">
                        <h2 className="home-header2">
                            Predict Market Trends with Precision
                        </h2>
                        <p className="home-text15">
                            Our advanced forecasting tool uses machine learning to provide
                            accurate predictions, helping you stay ahead of the competition.
                        </p>
                        <Link to="/sign-up" className="home-register button">
                            Explore Forecasting
                        </Link>
                        </div>
                    </div>
                    </section>
                </main>
            </div>
        </Router>

    );
}

export default App;
