import axios from "axios";

const request = axios.create({
    baseURL: 'api',
    timeout:5000
})
request.interceptors.response.use(
    response => {
        const res = response.data
        const { code , msg } = res
        if(code !== 200){
            console.log(msg)
        }else{
            return res
        }
    }
)

export default request