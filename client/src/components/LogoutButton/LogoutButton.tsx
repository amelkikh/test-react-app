import React from "react";
import {useHistory} from "react-router-dom"
import {useAuth} from "../../hooks/auth";

function LogoutButton() {
    let auth = useAuth()
    let history = useHistory()

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        auth.logout(() => {
            history.push("/")
        })
    }

    return (
        <div>
            <button type="button"
                    onClick={handleClick}
                    className="col btn btn-primary">
                Log out
            </button>
        </div>
    )
}

export default LogoutButton;

