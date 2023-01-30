import { useState } from "react";

function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    };
    
    const [token, setToken] = useState(getToken());
    const saveToken = token => {
        sessionStorage.setItem('token', JSON.stringify(token));
        setToken(token);
    }
    return {
        setToken: saveToken,
        token
    }
}

export default useToken;