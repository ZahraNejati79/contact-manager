import { useState } from "react";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import styles from "./ContactManager.module.css";
import Layout from "../RouterComponents/Layout";
import { Route, Switch } from "react-router";
import ContactDetail from "../ContactList/ContactDetail/ContactDetail";
import ContactEdit from "../ContactEdit/ContactEdit";

const ContactManager = () => {
  // const saveContacts = JSON.parse(localStorage.getItem("contacts"));
  // if (saveContacts) setContacts(saveContacts);
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const getdataa = async () => {
  //     const { data } = await getData();
  //     console.log(data.length);
  //     setCount(data.length);
  //   };
  //   getdataa();
  // }, []);

  return (
    <Switch>
      <Layout count={count}>
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
            render={(props) => <ContactList {...props} setCount={setCount} />}
          />
        </div>
      </Layout>
    </Switch>
  );
};

export default ContactManager;
