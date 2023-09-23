jsx
import React, { useState } from 'react';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [rollNo, setRollNo] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const handleRegistration = () => {
    

  

  
  if (rollNo.trim() === '' || accessCode.trim() === '') {
    alert('Please enter a valid roll number and access code.');
    return;
  }

  
  setIsRegistered(true);
};
    

    setIsRegistered(true);
  };

  const handleLogout = () => {
    setIsRegistered(false);
    setRollNo('');
    setAccessCode('');
  };

  return (
    <div>
      {isRegistered ? (
        <>
          <h1>Welcome, {rollNo}!</h1>
          <button onClick={handleLogout}>Logout</button>
          {/* Display the train schedule information here */}
        </>
      ) : (
        <>
          <h1>Registration</h1>
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
          <input
            type="password"
            placeholder="Access Code"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
          />
          <button onClick={handleRegistration}>Register</button>
        </>
      )}
    </div>
  );
}

export default App;