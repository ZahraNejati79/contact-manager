import { useState } from "react";
import styles from "./ContactForm.module.css";
const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ Name: "", Email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({ Name: "", Email: "" });
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ContactForm;
