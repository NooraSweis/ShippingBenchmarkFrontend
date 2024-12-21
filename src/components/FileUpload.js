import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ setChartData, setSavingsData }) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file to upload.");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("user_email", "user@company.com"); // Replace with dynamic user email

        try {
            // Upload the file
            await axios.post("http://localhost:8000/api/upload-csv/", formData);

            // Fetch aggregated data
            const response = await axios.get("http://localhost:8000/api/rate-savings?user_email=" + formData.get("user_email"));
            setChartData(response.data.results);

            // Savings summary data
            const opportunities = response.data.results.filter(
                (item) => item.median_price < item.user_price
            );
            const totalSavings = opportunities.reduce(
                (sum, item) => sum + (item.user_price - item.median_price),
                0
            );

            setSavingsData({
                totalSavings: totalSavings.toFixed(2),
                opportunitiesCount: opportunities.length,
                potentialSavingsMedianPrice: response.data.potential_savings_median_price,
            });
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload file or fetch data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Upload CSV File</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? "Uploading..." : "Upload"}
            </button>
        </div>
    );
};

export default FileUpload;
