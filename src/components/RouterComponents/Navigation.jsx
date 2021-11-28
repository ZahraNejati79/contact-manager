import { NavLink } from "react-router-dom";
const items = [
  { name: "Home", to: "/" },
  { name: "Add", to: "/add" },
];
const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
