import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Dashboard() {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await api.get('/payments/analytics', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setAnalytics(response.data);
      } catch (error) {
        alert('Error fetching analytics');
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {analytics.map((payment) => (
          <li key={payment.id}>{`${payment.description}: $${payment.amount}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
