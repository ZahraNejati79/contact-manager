import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>footer</footer>
    </>
  );
};

export default Layout;
