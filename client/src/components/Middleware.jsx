import axios from "axios";

class Middleware {
    getAllUsers() {
        return axios.get("http://localhost:8080/api/users")
    }
}

export default new Middleware();