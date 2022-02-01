import styles from '../../styles/Auth.module.css';
import axios from '../../config/axios';
import { ErrorContext } from '../../contexts/ErrorContext';

function RegisterForm() {
  return (
    <div className={styles['container']}>
      <div className={styles['form']}>
        <h2>Register</h2>
        <from>
          <div className={styles['inputBox']}>
            <input type="text" placeholder="Username" name="username" />
          </div>
          <div className={styles['inputBox']}>
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
          </div>
          <div className={styles['inputBox']}>
            <input type="text" placeholder="First Name" name="firstName" />
          </div>
          <div className={styles['inputBox']}>
            <input type="text" placeholder="Last Name" name="lastName" />
          </div>
          <div className={styles['inputBox']}>
            <input type="text" placeholder="Address" name="address" />
          </div>
          <div className={styles['inputBox']}>
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className={styles['inputBox']}>
            <input
              type="tel"
              placeholder="Phone number"
              name="phoneNumber"
              pattern="[0-9]{10}"
            />
          </div>
          <div className={styles['inputBox']}>
            <input type="submit" value="Register" />
          </div>
          <p className={styles['forget']}>
            Already have account ? <a href="#">Log in</a>
          </p>
        </from>
      </div>
    </div>
  );
}

export default RegisterForm;
