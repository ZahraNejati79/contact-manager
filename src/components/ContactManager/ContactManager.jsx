import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import styles from "./ContactManager.module.css";
import Layout from "../RouterComponents/Layout";
import { Route, Switch } from "react-router";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: Math.random() * 100, ...contact }]);
  };
  useEffect(() => {
    const saveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (saveContacts) setContacts(saveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <Switch>
      <Layout>
        <div className={styles.container}>
          <div className={styles.formdiv}>
            <Route
              path="/add"
              render={(props) => (
                <ContactForm addContact={addContactHandler} {...props} />
              )}
            />
          </div>
          <Route
            exact="true"
            path="/"
            render={(props) => <ContactList contacts={contacts} />}
          />
        </div>
      </Layout>
    </Switch>

    // <div className={styles.container}>
    //   <div className={styles.formdiv}>
    //     <h1>Contact Manager</h1>

    //     <ContactForm addContact={addContactHandler} />
    //   </div>
    //   <div className={styles.contacts}>
    //     {contacts.map((contact) => (
    //       <ContactList contact={contact} key={contact.id} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default ContactManager;
