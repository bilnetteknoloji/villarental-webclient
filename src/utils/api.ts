import axios from "axios";

export default () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://localhost:7214",
        headers: {
            Authorization: token,
        },
    });
};