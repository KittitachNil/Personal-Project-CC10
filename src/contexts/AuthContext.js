import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { clearToken, setToken, getToken } from '../services/localStorage';
import { LoadingContext } from './LoadingContext';
import { ErrorContext } from './ErrorContext';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const { setLoading } = useContext(LoadingContext);
    const { setError } = useContext(ErrorContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (getToken()) {
            axios
                .get('/users/me')
                .then((res) => setUser(res.data.user))
                .catch((err) => {
                    console.log(err);
                    clearToken();
                });
        }
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

            setLoading(false);

            if (res.data.role === 'ADMIN') {
                navigate('admin/dashboard');
            }
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
        setUser((prev) => ({ ...prev, ...value }));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

export { AuthContext };
