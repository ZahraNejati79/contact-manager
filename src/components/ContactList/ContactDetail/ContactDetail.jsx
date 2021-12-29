import { FaUser } from "react-icons/fa";
const ContactDetail = (props) => {
  const contact = props.location.state.contact;
  console.log(contact);
  return (
    <div className="detail">
      <div className="iconDetail">
        <FaUser />
      </div>
      <span>{contact.Name}</span>
      <span>{contact.Email}</span>
    </div>
  );
};

export default ContactDetail;
