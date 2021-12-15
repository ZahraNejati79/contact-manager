import axios from "axios";
axios.defaults.baseURL="http://localhost:3001/"

// axios.interceptors.response.use (
//     (response)=>{
//         console.log(response)
//         return(response)
//     },
//     (error)=>{
//         console.log(error)
//         return(error)
//     }
// )
// axios.interceptors.request.use(
//     (request)=>{
//         console.log(request)
//         return request
//     },
//     (error)=>{
//         console.log(error)
//         return(error)
//     }
// )
const http ={
    get :axios.get,
    post:axios.post,
    delete:axios.delete,
    post:axios.post,
    put:axios.put
    
}
export default http