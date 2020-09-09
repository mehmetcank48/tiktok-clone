import axios from 'axios';

const instance = axios.create({
  baseURL: "https://tiktok-mern-backend-mck.herokuapp.com/",
});

export default instance;