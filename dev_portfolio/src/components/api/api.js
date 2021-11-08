import axios from "axios"
const url = "https://flashcard-api-mayck.herokuapp.com/api";

const Api = {
    isloading: false, 
    get: (endpoint) => axios.get(url + endpoint).catch(console.log),
    post: (endpoint, data) => axios.post(url + endpoint, data).catch(console.log),
    put:(endpoint, data) => axios.put(url + endpoint, data).catch(console.log),
    del:(endpoint) => axios.del(url + endpoint).catch(console.log),
}
export default Api;