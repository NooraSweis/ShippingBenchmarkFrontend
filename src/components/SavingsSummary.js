import React from "react";

const SavingsSummary = ({ savingsData }) => {
    if (!savingsData) {
        return null;
    }

    return (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <h2>Potential Savings Summary</h2>
            <ul>
                <li>
                    <strong>Total Savings:</strong> ${savingsData.totalSavings || "0.00"}
                </li>
                <li>
                    <strong>Opportunities Count:</strong> {savingsData.opportunitiesCount || "0"}
                </li>
                <li>
                    <strong>Median Price Savings:</strong> $
                    {savingsData.potentialSavingsMedianPrice?.toFixed(2) || "0.00"}
                </li>
            </ul>
        </div>
    );
};

export default SavingsSummary;
