import axios from 'axios';

const api = axios.create({
    baseURL:"http://api.shivkishan.com/api/"
}
);

export default api;