import http from "./httpServices";
export default function updateContact(id, data) {
  return http.put(`/contacts/${id}`, data);
}
