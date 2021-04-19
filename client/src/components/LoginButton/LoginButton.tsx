import React from "react";
import {useAuth} from "../../hooks/auth"
import {useHistory} from "react-router-dom"

function LoginButton() {
    let history = useHistory();
    let auth = useAuth();
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        console.log(auth)
        history.push("/login")
    }

    return (
        <button type="button"
                onClick={handleClick}
                className="btn btn-primary">
            Log in
        </button>
    )
}

export default LoginButton;
