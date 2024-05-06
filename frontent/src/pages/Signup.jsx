import React, { useState } from 'react';
import '../styles/signup.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !mobileNumber) {
      console.error('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', {
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
      });
      console.log(response.data);
      if (response.data) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <center>
      <h3 className="fw-bold mb-4"> Sign Up </h3>
      <div className="sign__form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              style={{ width: '450px', padding: '10px', borderRadius: '10px' }}
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName)}
            />
          </div>

          <br />

          <div>
            <input
              style={{ width: '450px', padding: '10px', borderRadius: '10px' }}
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => handleInputChange(e, setLastName)}
            />
          </div>

          <br />

          <div>
            <input
              style={{ width: '450px', padding: '10px', borderRadius: '10px' }}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </div>

          <br />

          <div>
            <input
              style={{ width: '450px', padding: '10px', borderRadius: '10px' }}
              type="text"
              placeholder="Mobile number"
              value={mobileNumber}
              onChange={(e) => handleInputChange(e, setMobileNumber)}
            />
          </div>

          <br />

          <div>
            <input
              style={{ width: '450px', padding: '10px', borderRadius: '10px' }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
            />
          </div>

          <br />

          <button type="submit">Create an account</button>

          <h6>
            {' '}
            Already have an account?{' '}
            <p>
              Sign in
            </p>{' '}
          </h6>
        </form>
      </div>
    </center>
  );
}