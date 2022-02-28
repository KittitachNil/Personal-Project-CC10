import styles from '../../styles/Auth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import validator from 'validator';
import { AuthContext } from '../../contexts/AuthContext';
import { ErrorContext } from '../../contexts/ErrorContext';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setError } = useContext(ErrorContext);
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (validator.isEmpty(password) || password.includes(' ')) {
            console.log('Password can not empty and do not allowed whitespace');
            return setError(
                'Password can not empty and do not allowed whitespace'
            );
        }

        login(username, password);
        navigate('/');
    };

    return (
        <div className={styles['container']}>
            <div className={styles['form']}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles['inputBox']}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={styles['inputBox']}>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles['inputBox']}>
                        <button className="btn" type="submit">
                            Log in
                        </button>
                    </div>
                    <p className={styles['forget']}>
                        Forgot Password ? <Link to="#">Click Here</Link>
                    </p>
                    <p className={styles['forget']}>
                        Don't have an account ?
                        <Link to="/register">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
