let API_HOST = 'http://localhost:3001';

if (process.env.API_HOST) {
    API_HOST = process.env.API_HOST;
}

const CONFIG = {
    API_HOST: API_HOST
}

Object.freeze(CONFIG);

export default CONFIG;
