import React, {createContext, useContext, useState} from "react";
import AuthService from "../services/AuthService";

const authContext = createContext({
    isAuthenticated: false,
    user: null
});

export const useAuth = (): any => {
    return useContext(authContext);
}

export function ProvideAuth({children}: any) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false);


    const checkErrors = (): boolean => {
        return errors !== null;
    }


    const login = async (username: string, password: string, cb: CallableFunction) => {
        setErrors(null);
        return await AuthService(username, password)
            .then((result) => {
                if (result.errors) {
                    return setErrors(result.errors);
                }
                setUser(result);
                setAuthenticated(true);
                // localStorage.setItem(
                //     'user',
                //     JSON.stringify(result)
                // );
                cb();
            })
    };

    const logout = (cb: CallableFunction): void => {
        setUser(null);
        setAuthenticated(false);
        // localStorage.removeItem('user');
        cb();
    };

    return {
        user,
        isAuthenticated,
        checkErrors,
        login,
        logout,
    };
}
