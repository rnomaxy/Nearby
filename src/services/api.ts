import axios from "axios"

export const api = axios.create({
    baseURL: "http://192.168.1.101:3333",
    timeout: 10000,
})
