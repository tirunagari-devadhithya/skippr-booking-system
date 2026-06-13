import axios from "axios";

const API = axios.create({
    baseURL: "https://skippr-booking-system.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;