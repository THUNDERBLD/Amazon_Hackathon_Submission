import React, { useState } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function CarbonQuest() {
  // States for advanced and dynamic calculator
  const [calculationType, setCalculationType] = useState("distance");
  const [inputValue, setInputValue] = useState("");
  const [emission, setEmission] = useState(null);
  const [treesNeeded, setTreesNeeded] = useState(0);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  function handleDynamicCalculate() {
    if (!inputValue || isNaN(inputValue)) {
      alert("Please enter a valid number");
      return;
    }

    const value = parseFloat(inputValue);
    let emissionValue = 0;
    
    switch (calculationType) {
      case "distance":
        emissionValue = (value * 0.21);
        break;
      case "energy":
        emissionValue = (value * 0.233);
        break;
      case "waste":
        emissionValue = (value * 0.89);
        break;
      case "consumption":
        emissionValue = (value * 0.0025);
        break;
      default:
        emissionValue = 0;
    }
    
    const roundedEmission = Number(emissionValue.toFixed(2));
    setEmission(roundedEmission);
    setTreesNeeded(Math.ceil(roundedEmission / 21));
  }

  // Calculate journey data only when emission exists
  const journeyData = emission ? [
    { name: "Car", value: Number((emission * 0.6).toFixed(2)) },
    { name: "Bus", value: Number((emission * 0.3).toFixed(2)) },
    { name: "Train", value: Number((emission * 0.1).toFixed(2)) },
  ] : [];

  const sustainabilityTips = [
    { tip: "Turn off lights when not in use to save energy." },
    { tip: "Use public transportation to reduce carbon footprint." },
    { tip: "Recycle regularly to reduce waste." },
    { tip: "Opt for eco-friendly products in daily life." },
  ];

  const unescoSites = [
    { name: "Great Barrier Reef", link: "https://whc.unesco.org/en/list/154" },
    { name: "Amazon Rainforest", link: "https://whc.unesco.org/en/list/998" },
    { name: "Serengeti National Park", link: "https://whc.unesco.org/en/list/156" },
    { name: "Galápagos Islands", link: "https://whc.unesco.org/en/list/1" },
  ];

  return (
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh" }}>
    <div className="min-h-screen" style={{ backgroundColor: "#f2f2f2" }}>
      <ResponsiveAppBar />

      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">CarbonQuest</h1>
        <p className="text-gray-700">
          Measure and reduce your carbon footprint, explore eco-friendly practices, and learn about world heritage sites.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Journeys Completed Card */}
        <div className="border rounded-lg p-4 shadow-md lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Journeys Completed</h2>
          <ul className="space-y-2">
            {journeyData.map((journey, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{journey.name}</span>
                <span className="text-gray-500">{journey.value} kg CO2</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enhanced Carbon Emission Calculator Card */}
        <div className="border rounded-lg p-4 shadow-md lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Carbon Emission Calculator</h2>
          <div className="flex flex-col space-y-4">
            <select
              value={calculationType}
              onChange={(e) => setCalculationType(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-lg"
            >
              <option value="distance">Travel (km)</option>
              <option value="energy">Energy Consumption (kWh)</option>
              <option value="waste">Waste Generated (kg)</option>
              <option value="consumption">Consumption ($)</option>
            </select>
            <input
              type="number"
              placeholder={`Enter ${calculationType === "distance" ? "distance (km)" :
                calculationType === "energy" ? "energy consumption (kWh)" :
                calculationType === "waste" ? "waste generated (kg)" :
                "amount spent ($)"}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-lg"
            />
            <button
              onClick={handleDynamicCalculate}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Calculate Emission
            </button>

            {emission !== null && (
              <div className="text-lg font-medium text-green-600">
                <p>Estimated Emission: {emission} kg CO2</p>
                <p>
                  Trees Needed: <b>{treesNeeded}</b> tree{treesNeeded !== 1 ? "s" : ""}
                </p>
                {treesNeeded > 0 && (
                  <a
                    href="https://www.tema.org.tr/en/homepage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    🌳 Offset with Trees 🌳
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Visualization Section */}
          {emission !== null && journeyData.length > 0 && (
            <div className="mt-6">
              <PieChart width={400} height={250}>
                <Pie
                  data={journeyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  dataKey="value"
                >
                  {journeyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          )}
        </div>

        {/* Eco-Sustainability Tips Card */}
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Eco-Sustainability Tips</h2>
          <ul className="space-y-2">
            {sustainabilityTips.map((tip, index) => (
              <li key={index} className="text-gray-700 font-medium">
                {tip.tip}
              </li>
            ))}
          </ul>
        </div>

        {/* UNESCO Sites Card */}
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Explore UNESCO Heritage Sites</h2>
          <ul className="space-y-2">
            {unescoSites.map((site, index) => (
              <li key={index} className="text-blue-500 hover:underline">
                <a href={site.link} target="_blank" rel="noopener noreferrer">
                  {site.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CarbonQuest;