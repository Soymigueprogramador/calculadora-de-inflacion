import { useState } from 'react';
import './calcularInflacion.css';

const InflationCalculator = () => {
    const [initialValue, setInitialValue] = useState('');
    const [inflationRate, setInflationRate] = useState('');
    const [years, setYears] = useState('');
    const [adjustedValue, setAdjustedValue] = useState(null);
    const calculateAdjustedValue = () => {
      const adjusted = initialValue * Math.pow((1 + (inflationRate / 100)), years);
      setAdjustedValue(adjusted.toFixed(2));
    };
  
    return (
      <div>
        <h2> Calculadora de inflacion </h2>
        <div className='container'>
          <label htmlFor="initialValue">Initial Value:</label>
          <input
            type="number"
            id="initialValue"
            value={initialValue}
            onChange={(e) => setInitialValue(parseFloat(e.target.value))}
          />
        </div>
        <div className='container'>
          <label htmlFor="inflationRate">Inflation Rate (%):</label>
          <input
            type="number"
            id="inflationRate"
            value={inflationRate}
            onChange={(e) => setInflationRate(parseFloat(e.target.value))}
          />
        </div>
        <div className='container'>
          <label htmlFor="years">Years:</label>
          <input
            type="number"
            id="years"
            value={years}
            onChange={(e) => setYears(parseFloat(e.target.value))}
          />
        </div>
        <button onClick={calculateAdjustedValue}>Calculate</button>
        {adjustedValue !== null && (
          <div>
            <h3>Adjusted Value:</h3>
            <p>{adjustedValue}</p>
          </div>
        )}
      </div>
    );
};

export default InflationCalculator;
