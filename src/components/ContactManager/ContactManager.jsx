import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import styles from "./ContactManager.module.css";
const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: Math.random() * 100, ...contact }]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.formdiv}>
        <h1>Contact Manager</h1>

        <ContactForm addContact={addContactHandler} />
      </div>
      <div className={styles.contacts}>
        {contacts.map((contact) => (
          <ContactList contact={contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
};

export default ContactManager;
