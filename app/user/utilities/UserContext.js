
import React, { createContext, useState } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();
export const UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [infoUser, setinfoUser] = useState({});
    
    const register = async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await AxiosInstance().post('/users/register', body);
            return true;
        } catch (e) {
            console.log('register', e);
        }
        return false;
    }
    const login = async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await AxiosInstance().post('/auth/login', body);
            console.log('login', response);
            //đọc token
            const {token} = response.data;
            //lưu thông tin user
            setinfoUser (response.data.user) ;
            console.log('********result', infoUser.dob);
            //lưu token
            await AsyncStorage.setItem('token', token);
            //cập nhật lại state
            setIsLogin(true);
            return true;
        } catch (e) {
            console.log(e);
        }
    }
    
    
    return (
        <UserContext.Provider value={{ isLogin, login, register, infoUser,setinfoUser }}>
            {children}
        </UserContext.Provider>
    )
}
