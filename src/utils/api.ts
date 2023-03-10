import axios from "axios";

// export default () => {
//     const token = localStorage.getItem("token");
//
//     return axios.create({
//         baseURL: "https://localhost:7214",
//         headers: {
//             Authorization: token,
//         },
//     });
// };


const baseURL = 'https://localhost:44370/api/'; // Değiştirilmesi gereken yer

export const api = axios.create({
    baseURL,
});

export const get = <T>(url: string) => api.get<T>(url).then(res => res.data);
