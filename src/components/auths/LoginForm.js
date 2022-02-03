import styles from '../../styles/Auth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['form']}>
        <h2>Login</h2>
        <from onSubmit={handleSubmitLogin}>
          <div className={styles['inputBox']}>
            <input
              type="text"
              placeholder="Username"
              vale={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="password"
              placeholder="Password"
              vale={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles['inputBox']}>
            <input type="submit" value="Login" />
          </div>
          <p className={styles['forget']}>
            Forgot Password ? <Link to="#">Click Here</Link>
          </p>
          <p className={styles['forget']}>
            Don't have an account ? <Link to="/register">Sign up</Link>
          </p>
        </from>
      </div>
    </div>
  );
}

export default LoginForm;
