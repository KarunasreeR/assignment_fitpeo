import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="content-wrapper">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="routes-container">
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/chart" element={<Home />} />
                            <Route path="/calendar" element={<Home />} />
                            <Route path="/profit" element={<Home />} />
                            <Route path="/finance" element={<Home />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
