import React from "react";
import {useHistory} from "react-router-dom"

function ProfileButton() {
    let history = useHistory()

    return (
        <button type="button"
                onClick={(e) => {
                    history.push("/profile")
                }}
                className="col btn btn-primary">
            Profile
        </button>
    )
}

export default ProfileButton;

