import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <button className="btnF">
        <NavLink to="/">Home</NavLink>
      </button>
      <button className="btnF">
        <NavLink to="/add">Add new contact</NavLink>
      </button>
    </footer>
  );
};

export default Footer;
