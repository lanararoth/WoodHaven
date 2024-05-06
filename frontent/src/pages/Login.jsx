import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/signup.css';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from '../redux/slices/userSlice';
import axios from 'axios';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorMail] = useState('');
  const [errorPasword, setErrorPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let isValid = true;

      if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(email)) {
        setErrorMail("true");
        isValid = false;
      } else {
        setErrorMail('');
      }

      if (password.length < 6) {
        setErrorPassword('true');
        isValid = false;
      } else {
        setErrorPassword('');
      }

      if (isValid) {
        const response = await axios.post('http://localhost:5000/login', { email, password });
        const { firstName } = response.data;
        console.log(firstName,'frtdfdrdt');
        dispatch(setUser(firstName))
                onSubmit();
        if (response.data) {
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/signup');
  }

  const onSubmit = () => {
    toast.success('You are successfully logged in');
  };

  return (
    <center>
      <h3 className="fw-bold mb-4">Login</h3>
      <div className="sign__form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              style={{ width: '450px', padding: '10px', borderRadius: '10px' }}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorEmail === 'true' && (
              <p className="errorMsg">Email is required.</p>
            )}
          </div>
          <br />
          <div>
            <input
              style={{ width: '450px', padding: '10px', borderRadius: '10px' }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorPasword === 'true' && (
              <p className="errorMsg">Password is required.</p>
            )}
          </div>
          <br />
          <button type="submit">Login</button>
          <h6> Don't have an account?{''}
            <p onClick={redirecter}>Sign up</p>
          </h6>
        </form>
      </div>
    </center>
  );
}