import axios from "axios";

class Middleware {
    getAllUsers() {
        return axios.get("http://localhost:8080/api/users") //if dont work try "http://localhost:8080/api/users/add"
    }
    // Method to perform user login by sending a POST request with user data
    login(user) {
        return axios.post("http://localhost:8080/api/users/login", user)
    }
    // Method to register a new user by sending a POST request with user data
    register(user) {
        return axios.post("http://localhost:8080/api/users/save", user)
    }
}

export default new Middleware();