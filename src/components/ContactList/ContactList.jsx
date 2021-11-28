import styles from "./ContactList.module.css";
import { FaUser } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
const ContactList = ({ contacts }) => {
  return (
    <div className={styles.map}>
      {contacts.map((contact) => (
        <div className={styles.contactTrash}>
          <div className={styles.contact}>
            <div className={styles.icon}>
              <FaUser />
            </div>
            <div className={styles.nameEmail}>
              <span>{contact.Name}</span>
              <span>{contact.Email}</span>
            </div>
          </div>
          <div className={styles.trash}>
            <FiTrash2 />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
