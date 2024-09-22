import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

function Dashboard({ token }) {
    const [analytics, setAnalytics] = useState([]);

    const fetchAnalytics = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/interactions/analytics', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAnalytics(response.data);
        } catch (error) {
            console.error('Error fetching analytics:', error);
        }
    }, [token]); // Include token in the dependency array

    useEffect(() => {
        fetchAnalytics();
    }, [fetchAnalytics]); // Include fetchAnalytics in the dependency array

    return (
        <div>
            <h2>Your Analytics</h2>
            {analytics.map((item) => (
                <div key={item._id}>
                    <p>Action: {item._id} - Count: {item.count}</p>
                    <p>Pages: {item.pages.join(', ')}</p>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;
