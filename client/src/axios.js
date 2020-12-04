import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swiper-app-backend.herokuapp.com/'
})

export default instance;