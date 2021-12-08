import { FaUser } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "../ContactList.module.css";
const Contact = ({ contact ,deleteHandler }) => {
  const id = contact.id;
  return (
    <div key={id} className={styles.contactTrash}>
      <div className={styles.contact}>
        <div className={styles.icon}>
          <FaUser />
        </div>
        <Link to={{ pathname: `/usr/${id}`, state: { contact: contact } }}>
          <div className={styles.nameEmail}>
            <span>{contact.Name}</span>
            <span>{contact.Email}</span>
          </div>
        </Link>
      </div>
      <button className={styles.trash} onClick={deleteHandler}>
        <FiTrash2 />
      </button>
    </div>
  );
};

export default Contact;
