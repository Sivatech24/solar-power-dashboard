import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // 2-second loading screen
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <Loader className="animate-spin w-16 h-16" />
        <h1 className="mt-4 text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-10 text-center">
        <h2 className="text-5xl font-extrabold">AI-Powered Solar Dashboard</h2>
        <p className="text-lg mt-4 text-gray-600">Analyze, predict, and optimize solar power generation</p>
        <a href="https://solarpoweranalysis.streamlit.app/" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
          Open Dashboard
        </a>
      </section>
    </div>
  );
};

export default HomePage;
