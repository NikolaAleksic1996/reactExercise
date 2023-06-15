import axios from "axios";

class GlobalService {
    static getAllPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts')
    static getPost = (id) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

export default GlobalService;