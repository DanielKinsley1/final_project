import axios from "axios";

class Middleware {
    getAllUsers() {
        return axios.get("http://localhost:8080/api/users")
    }
    login(user){
        return axios.post("http://localhost:8080/api/users/login", user)
    }
    register(user){
        return axios.post("http://localhost:8080/api/users/save", user)
    }
}

export default new Middleware();