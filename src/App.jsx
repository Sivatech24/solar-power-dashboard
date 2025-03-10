import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import HomePage from "./HomePage";
import About from "./About";
import DownloadPage from "./DownloadPage";
import Project from "./Project";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <Loader className="animate-spin w-16 h-16" />
        <h1 className="mt-4 text-3xl font-bold">Solar Dashboard</h1>
      </div>
    );
  }

  return (
    <Router>
      <div className="h-screen flex flex-col font-sans">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center px-8">
          <div className="text-2xl font-bold text-gray-900">Solar Power Dashboard</div>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/project" className="hover:text-blue-500">Project</Link>
            <a href="https://github.com/Sivatech24/AI-Driven-Solar-Energy-Management-Forecasting-Optimization-Fault-Detection" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub</a>
            <a href="https://solarpoweranalysis.streamlit.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Streamlit</a>
            <a href="https://huggingface.co/spaces/CodingMaster24/SolarAnalysis" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Hugging Face</a>
            <Link to="/download" className="hover:text-blue-500">Download</Link>
            <Link to="/about" className="hover:text-blue-500">About</Link>
          </div>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;