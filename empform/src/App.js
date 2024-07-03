// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css'

function Form() {
  const [formData, setData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    address: '',
    pinCode: '',
    occupation: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleForm = (event) => {
    const { name, value } = event.target;
    setData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};

    // Pin code validation (assuming a 6-digit number)
    const pinCodeRegex = /^\d{6}$/;
    if (!pinCodeRegex.test(formData.pinCode)) {
      errors.pinCode = 'Pin code must be 6 digits';
    }

    // Contact number validation (starts with 6, 7, 8, 9 and 10 digits)
    const contactNumberRegex = /^[6-9]\d{9}$/;
    if (!contactNumberRegex.test(formData.contactNumber)) {
      errors.contactNumber = 'Contact number must start with 6, 7, 8, or 9 and be 10 digits long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
    }
  };

  return (
    <div>
      <div>
        <h1>Registration Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleForm}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Contact Number
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleForm}
              required
            />
          </label>
          {errors.contactNumber && <p style={{ color: 'red' }}>{errors.contactNumber}</p>}
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleForm}
              required
            />
          </label>
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>
            Address
            <textarea
              name="address"
              value={formData.address}
              onChange={handleForm}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Pin Code
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleForm}
              required
            />
          </label>
          {errors.pinCode && <p style={{ color: 'red' }}>{errors.pinCode}</p>}
        </div>
        <div>
          <label>
            Occupation
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleForm}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Data</h2>
          <p><strong>Name</strong> {submittedData.name}</p>
          <p><strong>Contact Number</strong> {submittedData.contactNumber}</p>
          <p><strong>Email</strong> {submittedData.email}</p>
          <p><strong>Address</strong> {submittedData.address}</p>
          <p><strong>Pin Code</strong> {submittedData.pinCode}</p>
          <p><strong>Occupation</strong> {submittedData.occupation}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
