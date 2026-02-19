import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PharmaGuard HealthTech</h1>
        <p>Healthcare Management System</p>
        <div className="features">
          <div className="feature-card">
            <h2>👥 Patient Management</h2>
            <p>Manage patient records and information</p>
          </div>
          <div className="feature-card">
            <h2>💊 Medication Tracking</h2>
            <p>Track medications and prescriptions</p>
          </div>
          <div className="feature-card">
            <h2>📋 Prescription System</h2>
            <p>Create and manage prescriptions</p>
          </div>
          <div className="feature-card">
            <h2>📦 Inventory Control</h2>
            <p>Monitor medication inventory levels</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
