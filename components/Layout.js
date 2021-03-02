const { default: Footer } = require("./Footer");
const { default: Navbar } = require("./Navbar");

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="py-4 px-3 lg:px-32 xl:px-80">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
