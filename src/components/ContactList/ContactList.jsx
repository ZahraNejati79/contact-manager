const ContactList = ({ contact }) => {
  return (
    <div>
      {contact.Name}
      {contact.Email}
    </div>
  );
};

export default ContactList;
