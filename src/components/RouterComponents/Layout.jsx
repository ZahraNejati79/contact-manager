import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, count }) => {
  return (
    <>
      <Header count={count} />
      {children}

      <Footer />
    </>
  );
};

export default Layout;
