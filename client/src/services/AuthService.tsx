import CONFIG from "../config";

async function AuthService(login: string, password: string) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // Add Bearer or JWT Token
        },
        body: JSON.stringify({
            email: login,
            password: password
        })
    };
    // TODO: Make API call wrapper
    try {
        const res = await fetch(`${CONFIG.API_HOST}/api/login`, options);
        return res.json();
    } catch (e) {
        console.error(e)
    }
}

export default AuthService;
