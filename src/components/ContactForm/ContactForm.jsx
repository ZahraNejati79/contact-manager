import { useState } from "react";
import { NavLink } from "react-router-dom";
import postContact from "../../services/addContactServices";
import { getData } from "../../services/getContactServices";

import styles from "./ContactForm.module.css";
const ContactForm = ({ history }) => {
  const [contact, setContact] = useState({ Name: "", Email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const addContact = async (contact) => {
    try {
      await postContact(contact);
    } catch (error) {
      console.log(error);
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({ Name: "", Email: "" });
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitForm} className={styles.form}>
        <p>Add Contact</p>
        <div>
          <label id="name">Name</label>
          <input
            type="text"
            name="Name"
            onChange={changeHandler}
            value={contact.Name}
          />
        </div>
        <div>
          <label id="Email">Email</label>
          <input
            type="email"
            name="Email"
            onChange={changeHandler}
            value={contact.Email}
          />
        </div>
        <button type="submit" className="styles.add">
          Add
        </button>
        <button>
          <NavLink to="/">Contact list</NavLink>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
