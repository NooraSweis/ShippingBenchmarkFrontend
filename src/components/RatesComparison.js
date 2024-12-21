import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RatesComparison = ({ email }) => {
    const [rates, setRates] = useState([]);

    useEffect(() => {
        if (email) {
            axios
                .get('http://127.0.0.1:8000/api/rate-savings/', { params: { user_email: email } })
                .then((response) => setRates(response.data.results))
                .catch((error) => console.error('Error fetching rates:', error));
        }
    }, [email]);

    return (
        <div>
            <h2>Rates Comparison</h2>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>User Price</th>
                    <th>Min Price</th>
                    <th>Median Price</th>
                    <th>Savings</th>
                </tr>
                </thead>
                <tbody>
                {rates.map((rate, index) => (
                    <tr key={index}>
                        <td>{rate.date}</td>
                        <td>{rate.origin}</td>
                        <td>{rate.destination}</td>
                        <td>${rate.user_price}</td>
                        <td>${rate.min_price}</td>
                        <td>${rate.median_price}</td>
                        <td>${rate.potential_savings_median_price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RatesComparison;
