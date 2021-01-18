import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecnomia.awesomeapi.com.br/json'
})

export default{
    all(){
        return api.get('/all')
    }
}