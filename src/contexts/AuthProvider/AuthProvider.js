import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [singleProduct, setSingleProduct] = useState({});

    /*
     * checkIfAuthenticated()
     *
     * Check if any route is authenticated or not
     */
    const checkIfAuthenticated = () => {
        setLoading(true);
        const getLoginData = localStorage.getItem("loginData");
        if (getLoginData != null) {
            const data = JSON.parse(getLoginData);
            if (data.success && data.access_token !== null) {
                setUser(data.user)
                return data.user;
            }
            return false;
        }
        return false;
    };

    /**
     * registerUser()
     *
     * @param {object} data
     */
    const registerUser = async (data) => {
        return await Axios.post("https://art.emporia-bd.com/art_api/api/v1/admin/register", data)
            .then((res) => {
                setLoading(false)
                setUser(res.data.data)
                return res.data;
            });
    };

    /**
     * loginUser()
     *
     * @param {object} data
     */
    const loginUser = async (data) => {
        setLoading(true)
        return await Axios.post(
            "http://localhost:8200/myTask/api/auth/login",
            data
        ).then((res) => {
            setLoading(false)
            setUser(res.data);
            return res.data;
        });
    };

    const handleModal = (product) => {
        setShow(true);
        setSingleProduct(product);
    }


    const passingValue = { user, setUser, checkIfAuthenticated, loginUser, registerUser, loading, show, setShow,singleProduct, setSingleProduct, handleModal }
    return (
        <AuthContext.Provider value={passingValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;