import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {useAuth} from "../../hooks/auth";


function LoginForm() {
    const [emailQuery, setEmailQuery] = useState('')
    const [passwordQuery, setPasswordQuery] = useState('')
    let auth = useAuth()
    let history = useHistory();

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        auth.login(emailQuery, passwordQuery, () => {
            history.push("/profile")
        });
    }

    return (
        <div className="auth-container col bg-white border rounded-lg py-4 px-5">
            <form onSubmit={handleSubmit}>
                <div className="row mt-2">
                    <input
                        type="text"
                        placeholder="user@email.com"
                        onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                            setEmailQuery(e.currentTarget.value)
                        }}
                        value={emailQuery}
                        className="form-control"
                    />
                </div>
                <div className="row mt-2">
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                            setPasswordQuery(e.currentTarget.value);
                        }}
                        value={passwordQuery}
                        className="form-control"
                    />
                </div>

                {auth.checkErrors() && (
                    <div className="row my-3 text-danger justify-content-center">Authentication failed</div>
                )}

                <div className="row mt-4">
                    <button
                        type="button"
                        className="col btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>)
}

export default LoginForm;
