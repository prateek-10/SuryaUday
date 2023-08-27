import React, { useState } from 'react';
import { InputAdornment, IconButton, Tooltip, TextField } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function Flexibility() {
    const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('')
  const [isFlipped, setIsFlipped] = useState(false);
  const [healthStatus1, setHealthStatus1] = useState('');
  const [healthStatus2, setHealthStatus2] = useState('');
  const [healthStatus3, setHealthStatus3] = useState('');

  const handleValue1Change = (event) => {
    const newValue = event.target.value;
  setErrorMessages('');
  setErrorMessages((prevErrorMessages) => ({
    ...prevErrorMessages,
    value1: newValue ? '' : 'Please fill in this field.',
  }));
  setValue1(newValue);
  };

  const handleValue2Change = (event) => {
    const newValue = event.target.value;
  setErrorMessages('');
  setErrorMessages((prevErrorMessages) => ({
    ...prevErrorMessages,
    value2: newValue ? '' : 'Please fill in this field.',
  }));
  setValue2(newValue);
  };
  const handleValue3Change = (event) => {
    const newValue = event.target.value;
  setErrorMessages('');
  setErrorMessages((prevErrorMessages) => ({
    ...prevErrorMessages,
    value3: newValue ? '' : 'Please fill in this field.',
  }));
  setValue3(newValue);
  };

  const compareValues = () => {
    const range1Min = 2;
    const range1Max = 4;
    const range2Min = 90;
    const range2Max = 120;
    const range3Min = 0;
    const range3Max = 80;


    const newErrorMessages = {};

    if (!value1) {
      newErrorMessages.value1 = 'Please fill in this field.';
    }

    if (!value2) {
      newErrorMessages.value2 = 'Please fill in this field.';
    }

    if (!value3) {
      newErrorMessages.value3 = 'Please fill in this field.';
    }

    setErrorMessages(newErrorMessages);


    if (Object.values(newErrorMessages).some((errorMsg) => errorMsg !== '')) {
      return;
    }


    setErrorMessages({});

    if (value1 <= range1Max) {
      setHealthStatus1('Healthy');
    } else if (value1 > range1Max) {
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

  const [errorMessages, setErrorMessages] = React.useState({
    value1: '',
    value2: '',
    value3: '',
  });

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
    <div className="container" style={{ width: '600px', marginTop: '20px', display: 'flex', direction: 'column', justifyContent: 'space-between' }}>
      <div className={`box ${isFlipped ? 'flipped' : ''}`}>
        <div className="flipper" style={{ width: '300px' }}>
          <div className="front">
            <div style={{ display: 'flex', flexDirection: 'row', width: '480px', justifyContent: 'space-between' }}>
              <label style={{ fontSize: '20px' }}>
                Measurements of Sit and Reach Test:
              </label>
              <br />
              <Tooltip title="You will need a stopwatch for this. Start the timer at the beginning of the run and note the final time in minutes after you have completed 1KM." placement="bottom">
                <IconButton aria-label="information" style={{ padding: '0px' }}>
                  <InfoIcon style={{ height: '20px', width: '20px' }} />
                </IconButton>
              </Tooltip>
            </div>
            <input
              placeholder="Enter the measurements in inches"
              type="number"
              value={value1}
              onChange={handleValue1Change}
              style={{ marginBottom: '20px', width: '500px', height: '30px' }}
            />
            {errorMessages.value1 && <div style={{ color: 'red', position: 'relative', marginTop: '-15px', fontSize:'15px' }}>{errorMessages.value1}</div>}
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', width: '480px', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '20px' }}>
              Trunk Rotation Test:
              </label>
              <br />
              <Tooltip title="You will need a stopwatch for this. Start the timer at the beginning of the run and note the final time in minutes after you have completed 1KM." placement="bottom">
                <IconButton aria-label="information" style={{ padding: '0px' }}>
                  <InfoIcon style={{ height: '20px', width: '20px' }} />
                </IconButton>
              </Tooltip>
              </div>
              <input
                placeholder='Enter the measurements in inches'
                type="number"
                value={value2}
                onChange={handleValue2Change}
                style={{ marginBottom: '20px', width: '500px', height: '30px' }}
              />
              {errorMessages.value2 && <div style={{ color: 'red', position: 'relative', marginTop: '-15px', fontSize:'15px' }}>{errorMessages.value2}</div>}
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', width: '480px', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '20px' }}>
              Groin Rotation Test:
              </label>
              <br />
              <Tooltip title="You will need a stopwatch for this. Start the timer at the beginning of the run and note the final time in minutes after you have completed 1KM." placement="bottom">
                <IconButton aria-label="information" style={{ padding: '0px' }}>
                  <InfoIcon style={{ height: '20px', width: '20px' }} />
                </IconButton>
              </Tooltip>
              </div>
              <input
                placeholder='Enter the measurements in inches'
                type="number"
                value={value3}
                onChange={handleValue3Change}
                style={{ marginBottom: '20px', width: '500px', height: '30px' }}
              />
              {errorMessages.value3 && <div style={{ color: 'red', position: 'relative', marginTop: '-15px', fontSize:'15px' }}>{errorMessages.value3}</div>}
            <br />
            <button onClick={compareValues} style={{ padding: '8px 20px' }}>Compare</button>
            {/* Display a general error message if any field is empty
            {Object.values(errorMessages).some((errorMsg) => errorMsg !== '') && (
              <div style={{ color: 'red', marginTop: '10px' }}>Please fill in all the fields.</div>
            )} */}
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

export default Flexibility