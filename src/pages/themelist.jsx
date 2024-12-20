import React from "react";

const ThemeList = () => {
  const themes = [
    {
      category: "Biofuels and Biorefineries for Sustainable Energy",
      items: [
        "BSE1 - Algal and Lignocellulosic Biorefineries",
        "BSE2 - Biomass Utilization: Fuels and Value Added Chemicals",
        "BSE3 - Solid, Liquid and Gaseous Biofuels",
        "BSE4 - Simulation and Design of Biorefineries Process",
        "BSE5 - Synergies between Power to X Biorefineries Technology",
      ],
    },
    {
      category: "Techno-economic Aspect of Bio-refineries",
      items: [
        "TAB1 - Waste-to-Energy and Zero-Waste Approaches",
        "TAB2 - Lifecycle Assessment (LCA) and Sustainability Metrics",
        "TAB3 - Circular Bioeconomy Strategies and Practices",
        "TAB4 - Economic Feasibility of Large-Scale Biorefineries",
        "TAB5 - Policy Management Energy Economics and Regulation",
      ],
    },
    {
      category: "Advancements in Distilleries and Related Technologies",
      items: [
        "ADR1 - Sustainable Distilleries Practices",
        "ADR2 - Innovation in Fermentation and Yeast Technology",
        "ADR3 - Process Optimization and Automation in Distillation",
        "ADR4 - Next-Generation Distillation Techniques",
        "ADR5 - Integrating Distilleries into Industrial Ecosystems",
      ],
    },
    {
      category: "Interdisciplinary Research, Design, Innovations and IPR",
      items: [
        "IDI1 - Innovative Biological Approaches to Wastewater Treatment",
        "IDI2 - Agriculture and Food Biotechnology",
        "IDI3 - Pharmaceutical Sciences: Research and Innovation",
        "IDI4 - Nano-biotechnology: Advancements and Applications",
        "IDI5 - Bioinformatics Applications to Bioscience and Bioengineering",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="p-6 m-6 bg-white shadow-md rounded-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
          BIO-METACON 2025
        </h1>
        <h2 className="text-xl font-semibold text-blue-600 text-center mb-4">
          “Advancement in Biorefineries: Opportunity and Challenges”
        </h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Theme</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Subtopics</th>
            </tr>
          </thead>
          <tbody>
            {themes.map((theme, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-700">
                  {theme.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside space-y-1">
                    {theme.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThemeList;