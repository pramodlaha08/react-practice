import axios from "axios";

const endpoints = axios.create({
    baseURL: "https://fakestoreapi.com/"
});

export default endpoints;