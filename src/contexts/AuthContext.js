import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {
    clearToken,
    setToken,
    // getToken,
    getRole,
} from '../services/localStorage';
import { LoadingContext } from './LoadingContext';
import { ErrorContext } from './ErrorContext';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(getRole());

    const { setLoading } = useContext(LoadingContext);
    const { setError } = useContext(ErrorContext);
    const navigate = useNavigate();
    // const token = getToken('token');

    // console.log(role);

    // useEffect(() => {
    //     if (getToken()) {
    //         axios
    //             .get('/users/me')
    //             .then((res) => setUser(res.data.user))
    //             .catch((err) => {
    //                 console.log(err);
    //                 clearToken();
    //             });
    //     }
    // }, []);

    const fetchUser = async () => {
        try {
            const res = await axios.get('/users/me');
            setUser(res.data.user);
            setRole(res.data.role);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = async (username, password) => {
        try {
            setLoading(true);
            const res = await axios.post('/auth/login', {
                username,
                password,
            });

            setToken(res.data.token);
            setUser(res.data.user);
            const payload = jwtDecode(res.data.token);
            // console.log(payload);
            setRole(payload.role);

            if (role === 'ADMIN') {
                navigate('/admin');
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError('Invalid username or password');
            setLoading(false);
        }
    };

    const logout = () => {
        clearToken();
        setUser(null);
        navigate('/login');
    };

    const updateUser = (value) => {
        // setUser((prev) => ({ ...prev, ...value }));
        fetchUser();
    };

    return (
        <AuthContext.Provider
            value={{ user, login, logout, updateUser, role, fetchUser }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

export { AuthContext };
