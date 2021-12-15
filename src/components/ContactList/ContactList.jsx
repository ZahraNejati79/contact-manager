import styles from "./ContactList.module.css";
import { FaUser } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";
import { getData } from "../../services/getContactServices";
import deleteOneContact from "../../services/delateContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getData();
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;
    if (search != "") {
      const filterContact = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filterContact);
    } else {
      setContacts(allContacts);
    }
  };

  const deleteHandlerr = async (id) => {
    try {
      await deleteOneContact(id);
      const { data } = await getData();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.map}>
      <div>
        <div>
          <input type="text" value={searchTerm} onChange={searchHandler} />
        </div>
        {contacts ? (
          contacts.map((c) => (
            <Contact contact={c} key={c.id} deleteHandler={deleteHandlerr} />
          ))
        ) : (
          <p>louding....</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
