import http from "./httpServices";
export default function deleteOneContact(id) {
  return http.delete(`/contacts/${id}`);
}
