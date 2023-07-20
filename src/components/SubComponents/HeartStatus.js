import React, { useState } from 'react';

function HealthStatus() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('')
  const [isFlipped, setIsFlipped] = useState(false);
  const [healthStatus1, setHealthStatus1] = useState('');
  const [healthStatus2, setHealthStatus2] = useState('');
  const [healthStatus3, setHealthStatus3] = useState('');

  const handleValue1Change = (event) => {
    setValue1(event.target.value);
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value);
  };
  const handleValue3Change = (event) => {
    setValue3(event.target.value);
  };

  const compareValues = () => {
    const range1Min = 2;
    const range1Max = 4;
    const range2Min = 90;
    const range2Max = 120;
    const range3Min = 0;
    const range3Max = 80;

    if (value1 >= range1Min && value1 <= range1Max) {
      setHealthStatus1('Healthy');
    } else if (value1 < range1Min) {
      setHealthStatus1('Unhealthy (Below range)');
    } else {
      setHealthStatus1('Unhealthy (Above range)');
    }

    if (value2 >= range2Min && value2 <= range2Max) {
      setHealthStatus2('Healthy');
    } else if (value2 < range2Min) {
      setHealthStatus2('Hypotension');
    } else {
      setHealthStatus2('Hypertension');
    }

    if (value3 >= range3Min && value3 <= range3Max) {
      setHealthStatus3('Healthy');
    } else if (value3 < range3Min) {
      setHealthStatus3('Unhealthy (Below range)');
    } else {
      setHealthStatus3('Unhealthy (Above range)');
    }

    setIsFlipped(true);
  };

  const handleReset = () => {
    setValue1('');
    setValue2('');
    setValue3('');
    setHealthStatus1('');
    setHealthStatus2('');
    setHealthStatus3('');
    setIsFlipped(false);
  };

  return (
    <div className="container" style={{ marginTop: '10px', display: 'flex', direction: 'column' ,justifyContent: 'space-between'}}>
    <div
      className={`box ${isFlipped ? 'flipped' : ''}`}
    >
      <div className="flipper" style={{width: '300px'}}>
        <div className="front">
          <label style={{fontSize: '20px'}}>
            Time Elapsed in Step Test:
            <br/>
            <input
              placeholder="Enter the time in minutes"
              type="number"
              value={value1}
              onChange={handleValue1Change}
              style={{marginBottom: '20px', width: '320px', height: '30px'}}
              />
          </label>
          <br />
          <label  style={{fontSize: '20px'}}>
            Systolic Pressure:
            <br/>
            <input
              placeholder='mmHg'
              type="number"
              value={value2}
              onChange={handleValue2Change}
              style={{marginBottom: '20px', width: '320px', height: '30px'}}
            />
          </label>
          <br />
          <label  style={{fontSize: '20px'}}>
            Diastolic Pressure:
            <br/>
            <input
              placeholder='mmHg'
              type="number"
              value={value3}
              onChange={handleValue3Change}
              style={{marginBottom: '20px', width: '320px', height: '30px'}}
            />
          </label>
          <br />
          <button onClick={compareValues}
          style={{padding: '8px 20px'}}>Compare</button>
        </div>
        <div className="back">
          <div>
            Health Status 1: <strong>{healthStatus1}</strong>
          </div>
          <div>
            Health Status 2: <strong>{healthStatus2}</strong>
          </div>
          <div>
            Health Status 3: <strong>{healthStatus3}</strong>
          </div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default HealthStatus;

