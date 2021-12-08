import { useEffect, useState } from "react";
import { getData } from "../../services/getContactServices";
import deleteOneContact from "../../services/delateContactService";
import contactPost from "../../services/addContactServices"
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import styles from "./ContactManager.module.css";
import Layout from "../RouterComponents/Layout";
import { Route, Switch } from "react-router";
import ContactDetail from "../ContactList/ContactDetail/ContactDetail";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);


  const addContactHandler =async (contact) => {
   
   try {
    setContacts([...contacts, { id: Math.random() * 100, ...contact }]);
await contactPost( { id: Math.random() * 100, ...contact })
   } catch (error) {
     console.log(error)
   }
  };

  useEffect(() => {
    // const saveContacts = JSON.parse(localStorage.getItem("contacts"));
    // if (saveContacts) setContacts(saveContacts);
    const getContacts = async ()=>{
    const {data} = await getData()
    setContacts([...contacts,...data]);
    }
    getContacts()
  
  }, []);




  const deleteContact =async(id)=>{
    try {
      await deleteOneContact(id)
      const filtered = contacts.filter((c)=>c.id != id)
      setContacts(filtered)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Switch>
      <Layout>
        <div className={styles.container}>
          <Route path="/usr/:id" component={ContactDetail} />
          <div className={styles.formdiv}>
            <Route
              path="/add"
              render={(props) => (
                <ContactForm addContact={addContactHandler} {...props} />
              )}
            />
          </div>
          <Route
            exact={true}
            path="/"
            render={(props) => <ContactList contacts={contacts} deleteHandler={deleteContact}/>}
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
