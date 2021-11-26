import { useState } from "react";

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
    <form onSubmit={submitForm}>
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
  );
};

export default ContactForm;
