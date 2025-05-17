// Install Axios
// npm install axios

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log("User typed something,",formData);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post('http://localhost:5000/register', formData)
      .then((response) => {
        setResponseMessage(response.data.message);
      })
      .catch((error) => {
        setResponseMessage(error.response.data.message || 'Something went wrong!');
      });
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default App;
