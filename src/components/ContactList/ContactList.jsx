import styles from "./ContactList.module.css";
import { FaUser } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import Contact from "./Contact/Contact";
const ContactList = ({ contacts }) => {
  return (
    <div className={styles.map}>
      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
