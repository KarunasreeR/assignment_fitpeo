import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
    return (
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
                        <div>Content</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
