import http from "./httpServices";
export default deleteOneContact=(id)=>{
    return http.delete(`contacts/${id}`)
}