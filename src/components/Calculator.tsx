// components/Calculator.tsx
import React, { useState } from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(150);
  const [systemSize, setSystemSize] = useState<number>(5);
  const [savings, setSavings] = useState<number>(0);

  const calculateSavings = () => {
    const yearlyBill = monthlyBill * 12;
    const yearlyProduction = systemSize * 1500;
    const yearlySavings = (yearlyProduction * 0.15);
    setSavings(Math.round(yearlySavings));
  };

  React.useEffect(() => {
    calculateSavings();
  }, [monthlyBill, systemSize]);

  return (
    <section id="calculator" className="calculator section">
      <div className="container">
        <h2 className="section-title">Calculate Your Savings</h2>
        <p className="section-subtitle">
          See how much you can save by switching to solar energy
        </p>
        <div className="calculator-card">
          <div className="calculator-controls">
            <div className="control-group">
              <label>Monthly Electricity Bill ($)</label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
              />
              <span className="control-value">${monthlyBill}</span>
            </div>
            <div className="control-group">
              <label>System Size (kW)</label>
              <input
                type="range"
                min="3"
                max="15"
                step="0.5"
                value={systemSize}
                onChange={(e) => setSystemSize(Number(e.target.value))}
              />
              <span className="control-value">{systemSize} kW</span>
            </div>
          </div>
          <div className="calculator-results">
            <div className="result-card">
              <span className="result-label">Estimated Annual Savings</span>
              <span className="result-value">${savings.toLocaleString()}</span>
            </div>
            <div className="result-card">
              <span className="result-label">20-Year Savings</span>
              <span className="result-value">${(savings * 20).toLocaleString()}</span>
            </div>
            <div className="result-card">
              <span className="result-label">CO₂ Offset (lbs/year)</span>
              <span className="result-value">{Math.round(systemSize * 1800).toLocaleString()}</span>
            </div>
          </div>
          <button className="calculator-cta">Get Personalized Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;