import { FaUser } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";
import { Link } from "react-router-dom";
import styles from "../ContactList.module.css";
const Contact = ({ contact, deleteHandler }) => {
  const id = contact.id;
  return (
    <div key={id} className={styles.contact}>
      <div className={styles.user}>
        <div>
          <FaUser calssName={styles.userIcon} />
        </div>
        <Link to={{ pathname: `/usr/${id}`, state: { contact: contact } }}>
          <div className={styles.nameEamil}>
            <span>{contact.Name}</span>
            <span>{contact.Email}</span>
          </div>
        </Link>
      </div>
      <div className={styles.icons}>
        <button
          className={styles.trash}
          onClick={() => deleteHandler(contact.id)}
        >
          <FiTrash2 />
        </button>
        <Link to={`/edit/${id}`}>
          <button calssName={styles.edit}>
            <VscEdit />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
