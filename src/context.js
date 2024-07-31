import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!
        localStorage.getItem('token'));
        const history = useHistory();

        const login = async (username, password) => {
            try {
                const response = await axios.post('/api/auth/login', { username, password });
                localStorage.setItem('token', response.data.token);
                setIsAuthenticated(true);
                history.push('/account');
            } catch (error) {
                console.error('Login Failed:', error);
            }
        };

        const logout = () => {
            localStorage.removeItem('token');
            setIsAuthenticated(false);
            history.push('/login');
        };

        return (
            <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
                {children}
                </AuthContext.Provider>
        );
};

export const useAuth = () => useContext(AuthContext);