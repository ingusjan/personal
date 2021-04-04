import { initGA, logPageView } from "../util/analytics";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = (props) => {
  const { children } = props;

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container mx-auto px-3 xl:px-0 py-4 lg:mt-6'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
