import axios from 'axios';

const instance = axios.create({
    baseURL: "https://sk-tinder-backend.herokuapp.com/"
})

export default instance;
