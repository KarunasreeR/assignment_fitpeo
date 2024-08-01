import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
// Import other components for different routes here

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app-wrapper">
                    <div className="sidebar-wrapper">
                        <Sidebar />
                    </div>
                    <div className="header-content-wrapper w-100">
                        <div className="header-wrapper">
                            <Header />
                        </div>
                        <div className="content-wrapper">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate to="/home" />}
                                />
                                <Route path="/home" element={<Home />} />
                                {/* Add other routes here */}
                                <Route path="/chart" element={<Home />} />
                                <Route path="/calendar" element={<Home />} />
                                <Route path="/profit" element={<Home />} />
                                <Route path="/finance" element={<Home />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
