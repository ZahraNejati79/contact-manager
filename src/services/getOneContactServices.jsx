import http from "./httpServices";
export default function getOneContact(id) {
  return http.get(`/contacts/${id}`);
}
