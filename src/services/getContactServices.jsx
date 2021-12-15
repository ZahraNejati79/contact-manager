import http from "./httpServices";
export function getData() {
  return http.get("/contacts");
}
