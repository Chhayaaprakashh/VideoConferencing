let IS_PROD = true;

const server = IS_PROD ?
    "https://videoconferencing-r7xa.onrender.com" :
    "http://localhost:5000"

export default server;