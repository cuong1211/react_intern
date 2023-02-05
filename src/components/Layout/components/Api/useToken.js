import { useState } from "react";

export const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
};
function useToken() {
    
    const [token, setToken] = useState(getToken());
    const saveToken = token => {
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token);
    }
    return {
        setToken: saveToken,
        token
    }
}

export default useToken;