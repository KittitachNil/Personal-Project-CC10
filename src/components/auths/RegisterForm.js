import styles from '../../styles/Auth.module.css';
import axios from '../../config/axios';
import { ErrorContext } from '../../contexts/ErrorContext';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const res = await axios.post('auth/register', {
        userName,
        password,
        confirmPassword,
        firstName,
        lastName,
        address,
        email,
        phoneNumber,
      });
      navigate('/');
    } catch (err) {
      setError(err.response.dat.message);
    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles['form']}>
        <h2>Register</h2>
        <from onSubmit={handleSubmitRegister}>
          <div className={styles['inputBox']}>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="tel"
              placeholder="Phone number"
              pattern="[0-9]{10}"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            {/* <input type="submit" value="Register" /> */}
            <button type="submit" onClick={() => navigate('/')}>
              Register
            </button>
          </div>
          <p className={styles['forget']}>
            Already have account ? <Link to="/login"> Log in</Link>
          </p>
        </from>
      </div>
    </div>
  );
}

export default RegisterForm;
