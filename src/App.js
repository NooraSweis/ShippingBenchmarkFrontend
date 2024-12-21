import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import MarketTrendsChart from "./components/MarketTrendsChart";
import SavingsSummary from "./components/SavingsSummary";

function App() {
    const [chartData, setChartData] = useState(null);
    const [savingsData, setSavingsData] = useState(null); // State to hold savings data

    return (
        <div>
            <h1>Shipping Benchmark Tool</h1>
            <FileUpload setChartData={setChartData} setSavingsData={setSavingsData} />
            <div style={{ marginTop: "20px" }}>
                {savingsData && <SavingsSummary savingsData={savingsData} />}
            </div>
            <div style={{ marginTop: "20px" }}>
                {chartData && <MarketTrendsChart data={chartData} />}
            </div>
        </div>
    );
}

export default App;
