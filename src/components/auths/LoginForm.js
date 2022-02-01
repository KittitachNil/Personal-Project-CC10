import styles from '../../styles/Auth.module.css';
import axios from '../../config/axios';
import { ErrorContext } from '../../contexts/ErrorContext';

function LoginForm() {
  return (
    <div className={styles['container']}>
      <div className={styles['form']}>
        <h2>Login</h2>
        <from>
          <div className={styles['inputBox']}>
            <input type="text" placeholder="Username" name="username" />
          </div>
          <div className={styles['inputBox']}>
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className={styles['inputBox']}>
            <input type="submit" value="Login" />
          </div>
          <p className={styles['forget']}>
            Forgot Password ? <a href="#">Click Here</a>
          </p>
          <p className={styles['forget']}>
            Don't have an account ? <a href="#">Sign up</a>
          </p>
        </from>
      </div>
    </div>
  );
}

export default LoginForm;
