import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import {useAuth} from "../../hooks/auth";
import LogoutButton from "../LogoutButton/LogoutButton";
import ProfileButton from "../ProfileButton/ProfileButton";

function HomePage() {
    let auth = useAuth()
    return (
        <div className="text-center">
            <h1>Home Page</h1>
            {!auth.isAuthenticated && <LoginButton/>}
            {auth.isAuthenticated && <LogoutButton/>}
            {auth.isAuthenticated && <ProfileButton/>}
        </div>
    )
}

export default HomePage;
