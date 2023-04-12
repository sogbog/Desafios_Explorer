import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocket-movies-zf7x.onrender.com"
})