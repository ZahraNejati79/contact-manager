import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContactHandler} />
      {contacts.map((contact, index) => (
        <ContactList contact={contact} key={index} />
      ))}
    </div>
  );
};

export default ContactManager;
