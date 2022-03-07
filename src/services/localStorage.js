import { ACCESS_TOKEN } from '../config/data';
import jwtDecode from 'jwt-decode';

const getToken = () => localStorage.getItem(ACCESS_TOKEN);
const setToken = (value) => {
    localStorage.setItem(ACCESS_TOKEN, value);
};
const clearToken = () => localStorage.removeItem(ACCESS_TOKEN);

const getRole = () => {
    if (getToken()) {
        const Token = getToken();
        const payload = jwtDecode(Token);
        return payload.role;
    }
    return 'guest';
};

export { getToken, setToken, clearToken, getRole };
