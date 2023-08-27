import React, { useState } from 'react';
import { InputAdornment, IconButton, Tooltip, TextField } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function Bmi ()  {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);
    const [healthStatus1, setHealthStatus1] = useState('');
    const [bmiResult, setbmiResult] = useState(null);
    
    const handleValue1Change = (event) => {
      const newValue = event.target.value;
    setErrorMessages('');
    setErrorMessages((prevErrorMessages) => ({
      ...prevErrorMessages,
      value1: newValue ? '' : 'Please fill in this field.',
    }));
    setValue1(newValue);
    };

    const handleValue2Change = (event) => { // Add height input handler
      const newValue = event.target.value;
      setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        value2: newValue ? '' : 'Please fill in this field.',
      }));
      setValue2(newValue);
    };
  
    const compareValues = () => {
      const range1Min = 18.5;
      const range1Max = 25;
      const newErrorMessages = {};
  
      if (!value1) {
        newErrorMessages.value1 = 'Please fill in this field.';
      }
      if (!value2) {
        newErrorMessages.value2 = 'Please fill in this field.';
      }
  
      setErrorMessages(newErrorMessages);
  
  
      if (Object.values(newErrorMessages).some((errorMsg) => errorMsg !== '')) {
        return;
      }
  
  
      setErrorMessages({});

      const bmi = value1 / (value2 * value2);
      setbmiResult(bmi.toFixed(2));
      if (bmi <= range1Min) {
        setHealthStatus1('You are underweight');
      } else if (bmi > range1Max) {
        setHealthStatus1('You are overweight');
      } else {
        setHealthStatus1(' You are healthy');
      }
  
      setIsFlipped(true);
    };
  
    const [errorMessages, setErrorMessages] = React.useState({
      value1: '',
      value2: '',
    });
  
    const handleReset = () => {
      setValue1('');
      setValue2('');
      setHealthStatus1('');
      setIsFlipped(false);
    };
    return (
        <div className="container" style={{ width: '600px', marginTop: '20px', display: 'flex', direction: 'column', justifyContent: 'space-between' }}>
          <div className={`box ${isFlipped ? 'flipped' : ''}`}>
            <div className="flipper" style={{ width: '300px' }}>
              <div className="front">
                <div style={{ display: 'flex', flexDirection: 'row', width: '480px', justifyContent: 'space-between' }}>
                  <label style={{ fontSize: '20px' }}>
                    Weight:
                  </label>
                  <br />
                  <Tooltip title="You will need a stopwatch for this. Start the timer at the beginning of the run and note the final time in minutes after you have completed 1KM." placement="bottom">
                    <IconButton aria-label="information" style={{ padding: '0px' }}>
                      <InfoIcon style={{ height: '20px', width: '20px' }} />
                    </IconButton>
                  </Tooltip>
                </div>
                <input
                  placeholder="Enter the weight in Kilograms"
                  type="number"
                  value={value1}
                  onChange={handleValue1Change}
                  style={{ marginBottom: '20px', width: '500px', height: '30px' }}
                />
                {errorMessages.value1 && <div style={{ color: 'red', position: 'relative', marginTop: '-15px', fontSize:'15px' }}>{errorMessages.value1}</div>}
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', width: '480px', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '20px' }}>
                  Height:
                  </label>
                  <br />
                  <Tooltip title="You will need a stopwatch for this. Start the timer at the beginning of the run and note the final time in minutes after you have completed 1KM." placement="bottom">
                    <IconButton aria-label="information" style={{ padding: '0px' }}>
                      <InfoIcon style={{ height: '20px', width: '20px' }} />
                    </IconButton>
                  </Tooltip>
                  </div>
                  <input
                    placeholder='Enter the height in meters, upto 2 decimal places'
                    type="number"
                    value={value2}
                    onChange={handleValue2Change}
                    style={{ marginBottom: '20px', width: '500px', height: '30px' }}
                  />
                  {errorMessages.value2 && <div style={{ color: 'red', position: 'relative', marginTop: '-15px', fontSize:'15px' }}>{errorMessages.value2}</div>}
                <br />
                <br />
                <button onClick={compareValues} style={{ padding: '8px 20px' }}>Calculate</button>
              </div>
              <div className="back">
                <div>
                {bmiResult !== null && ( // Check if BMI result is available
            <div>
              <div>BMI: <strong>{bmiResult}</strong></div>
              <div>Health Status: <strong>{healthStatus1}</strong></div>
            </div>
          )}
                </div>
                <button onClick={handleReset}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Bmi