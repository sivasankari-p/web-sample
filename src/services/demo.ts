import axios from "axios";

class DemoService {
    static fetchTodos = () => axios({
        method: "get",
        url: "/todos",
    });
}

export default DemoService;
