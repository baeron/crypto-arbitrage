import axios from 'axios';

const instance = axios.create({
    //dev url
    baseURL: 'http://localhost:5000'
    //prod url
});

export default instance;