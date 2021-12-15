import styles from "../ContactForm/ContactForm.module.css"
import { useEffect, useState } from "react";
import deleteOneContact from "../../services/delateContactService";
import postContact from "../../services/addContactServices";
import { getData } from "../../services/getContactServices";
import updateContact from "../../services/updateContactService";
import getOneContact from "../../services/getOneContactServices";
const ContactEdit = ({match,history,editContact}) => {
console.log(match)
  const [contact, setContact] = useState({ Name:"", Email:"" });
    const changeHandler = (e) => {
      setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const submitForm =  (e) => {
     e.preventDefault();
      editContact(contact ,match.params.id)
      history.push("/")
    };

    useEffect(()=>{
      const localfetch =async()=>{
        try {
          const {data}=await getOneContact(match.params.id)
          setContact({Name:data.Name,Email:data.Email})
        } catch (error) {
        }
      }
      localfetch();

    },[])
    return ( <div className={styles.container}>
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
          <button type="submit">Edit</button>
        </form>
      </div> );
}
 
export default ContactEdit;