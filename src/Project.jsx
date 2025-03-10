import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaSolarPanel, FaChartLine, FaCog, FaBolt, FaDatabase } from "react-icons/fa";

export default function SolarProject() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-900 dark:text-white">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI-Driven Sustainable Energy Management
      </motion.h1>

      <motion.p
        className="text-lg text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Utilizing AI for forecasting, optimization, and commercial viability in solar energy systems.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        <FeatureCard
          icon={<FaSolarPanel className="text-yellow-500 text-4xl" />}
          title="Solar Power Prediction"
          description="Using LSTM models to forecast solar power generation based on historical data."
        />

        <FeatureCard
          icon={<FaChartLine className="text-blue-500 text-4xl" />}
          title="Energy Optimization"
          description="Maximizing efficiency by analyzing power production and usage trends with AI."
        />

        <FeatureCard
          icon={<FaCog className="text-green-500 text-4xl" />}
          title="Inverter Failure Detection"
          description="Leveraging Random Forest classifiers to predict inverter failures and ensure reliability."
        />

        <FeatureCard
          icon={<FaBolt className="text-red-500 text-4xl" />}
          title="Commercial Viability"
          description="Assessing the financial feasibility of solar energy systems through AI-driven insights."
        />

        <FeatureCard
          icon={<FaDatabase className="text-purple-500 text-4xl" />}
          title="Data Insights"
          description="Analyzing solar plant data, including daily yield, AC/DC power, and power conversion efficiency."
        />
      </div>

      <div className="text-center mt-10">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
          Learn More
        </Button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="p-6 border rounded-2xl shadow-lg bg-white dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-4">{icon}<h2 className="text-xl font-semibold">{title}</h2></div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
