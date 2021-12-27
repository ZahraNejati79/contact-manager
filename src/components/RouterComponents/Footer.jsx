import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <button className="btnF">
          <NavLink to="/add">Add new contact</NavLink>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
