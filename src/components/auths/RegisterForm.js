import styles from '../../styles/Auth.module.css';
import axios from '../../config/axios';
import validator from 'validator';
import { ErrorContext } from '../../contexts/ErrorContext';
import { ToastContext } from '../../contexts/ToastContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const { setError } = useContext(ErrorContext);
    const { setMessage } = useContext(ToastContext);
    const { setLoading } = useContext(LoadingContext);

    const navigate = useNavigate();

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        setError('');

        if (!validator.isAlphanumeric(username, 'en-US', { ignore: '_-' })) {
            console.log('Username must be english alphabet or numbers');
            return setError(
                'Username must be english alphabet, numbers or underscore.'
            );
        }

        if (!validator.isEmail(email)) {
            console.log('Wrong Email formaat');
            setError('Wrong Email format');
        }

        if (validator.isEmpty(password) || password.includes(' ')) {
            console.log("Password can't be empty, whitespace not allowed");
            return setError("Password can't be empty, whitespace not allowed");
        }

        if (password.length < 6) {
            console.log('Password must longer than 5 charecter');
            return setError('Password must longer than 5 charecter');
        }

        if (!validator.equals(password, confirmPassword)) {
            console.log('Passwords did not match');
            return setError('Passwords did not match');
        }

        try {
            setLoading(true);
            const res = await axios.post('auth/register', {
                username,
                password,
                confirmPassword,
                firstName,
                lastName,
                address,
                email,
                phoneNumber,
            });
            setMessage('Registration Successful');
            setLoading(false);
            navigate('/');
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    };

    return (
        <div className={styles['container']}>
            <div className={styles['form']}>
                <h2>Register</h2>
                <form onSubmit={handleSubmitRegister}>
                    <div className={styles['inputBox']}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        <button type="submit">Register</button>
                    </div>
                    <p className={styles['forget']}>
                        Already have account ? <Link to="/login"> Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
