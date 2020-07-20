import React, {useState} from 'react';
import {MainContext} from './mainContext';

export const MyState = ({children}) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        password_confirmation: '',
        checkTextInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
        })
    };

    return <MainContext.Provider
        value={[data, setData, requestOptions]}>{children}
    </MainContext.Provider>
};

