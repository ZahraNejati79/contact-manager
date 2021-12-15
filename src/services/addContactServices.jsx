import http from "./httpServices";

export default function postContact(contact) {
  return http.post("contacts/", contact);
}
