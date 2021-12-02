const ContactDetail = (props) => {
  const contact = props.location.state.contact;
  console.log(contact);
  return (
    <div>
      <span>{contact.Name}</span>
      <span>{contact.Email}</span>
    </div>
  );
};

export default ContactDetail;
