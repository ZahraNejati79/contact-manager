import { useEffect, useState } from "react";
import { getData } from "../../services/getContactServices";
import deleteOneContact from "../../services/delateContactService";
import contactPost from "../../services/addContactServices";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import styles from "./ContactManager.module.css";
import Layout from "../RouterComponents/Layout";
import { Route, Switch } from "react-router";
import ContactDetail from "../ContactList/ContactDetail/ContactDetail";
import ContactEdit from "../ContactEdit/ContactEdit";
import updateContact from "../../services/updateContactService";

const ContactManager = () => {
  // const saveContacts = JSON.parse(localStorage.getItem("contacts"));
  // if (saveContacts) setContacts(saveContacts);

  return (
    <Switch>
      <Layout>
        <div className={styles.container}>
          <Route path="/usr/:id" component={ContactDetail} />
          <div className={styles.formdiv}>
            <Route path="/add" render={(props) => <ContactForm {...props} />} />
          </div>
          <Route
            path="/edit/:id"
            render={(props) => <ContactEdit {...props} />}
          />
          <Route
            exact={true}
            path="/"
            render={(props) => <ContactList {...props} />}
          />
        </div>
      </Layout>
    </Switch>
  );
};

export default ContactManager;
