import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

const routes = [
  { path: "/", component: ContactList },
  { path: "/contact-form", component: ContactForm },
];

export default routes;
