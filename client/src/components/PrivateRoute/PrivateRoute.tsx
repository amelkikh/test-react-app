import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {useAuth} from "../../hooks/auth"

interface PrivateRouteProps {
    component: any;
    path: string;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props;
    const auth = useAuth()
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                auth.isAuthenticated ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect
                        to="/login"
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
