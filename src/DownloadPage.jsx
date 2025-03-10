import { Link } from "react-router-dom";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const Download = () => {
  const models = [
    {
      name: "Small Model",
      fileH5: "electricity_prediction_dense.h5",
      fileKeras: "electricity_prediction_dense.keras",
      linkH5: "https://github.com/Sivatech24/AI-Driven-Solar-Energy-Management-Forecasting-Optimization-Fault-Detection/blob/e31727907cf90a7e2a63d1a91587b6ef0f1254d5/SolarWorks/FineTuneModel/SmallModel/electricity_prediction_dense.h5",
      linkKeras: "https://github.com/Sivatech24/AI-Driven-Solar-Energy-Management-Forecasting-Optimization-Fault-Detection/blob/e31727907cf90a7e2a63d1a91587b6ef0f1254d5/SolarWorks/FineTuneModel/SmallModel/electricity_prediction_dense.keras",
    },
    {
      name: "Large Model",
      fileH5: "electricity_prediction_dense.h5",
      fileKeras: "electricity_prediction_dense.keras",
      linkH5: "https://github.com/Sivatech24/AI-Driven-Solar-Energy-Management-Forecasting-Optimization-Fault-Detection/blob/e31727907cf90a7e2a63d1a91587b6ef0f1254d5/SolarWorks/FineTuneModel/electricity_prediction_dense.h5",
      linkKeras: "https://github.com/Sivatech24/AI-Driven-Solar-Energy-Management-Forecasting-Optimization-Fault-Detection/blob/e31727907cf90a7e2a63d1a91587b6ef0f1254d5/SolarWorks/FineTuneModel/electricity_prediction_dense.keras",
    },
  ];

  const pypiPackages = [
    {
      name: "TensorFlow Dense Model",
      link: "https://pypi.org/project/Solar-Power-Prediction-Using-Tensorflow-Dense-Model/",
      installCommand: "pip install Solar-Power-Prediction-Using-Tensorflow-Dense-Model",
    },
    {
      name: "TensorFlow LSTM Model",
      link: "https://pypi.org/project/Solar-Power-Prediction-Tensorflow-LSTM-Model/",
      installCommand: "pip install Solar-Power-Prediction-Tensorflow-LSTM-Model",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white p-10 text-center">
      <h2 className="text-5xl font-extrabold mb-4">Download Models</h2>
      <p className="text-lg text-gray-300 mb-10">Download pre-trained models or install packages to train your own.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {models.map((model, index) => (
          <div key={index} className="bg-gray-800 p-6 shadow-lg rounded-xl text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-gray-200">{model.name}</h3>
            <div className="mt-4">
              <a href={model.linkH5} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-2 transition">
                <FaDownload /> Download {model.fileH5}
              </a>
              <a href={model.linkKeras} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg mt-2 transition">
                <FaDownload /> Download {model.fileKeras}
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-extrabold mt-16">Train Your Own Model</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {pypiPackages.map((pkg, index) => (
          <div key={index} className="bg-gray-800 p-6 shadow-lg rounded-xl text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-gray-200">{pkg.name}</h3>
            <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg mt-4 transition">
              <FaExternalLinkAlt /> View on PyPi
            </a>
            <p className="mt-4 bg-gray-700 p-3 rounded-lg text-sm font-mono text-gray-300 select-all">{pkg.installCommand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;