import { useEffect } from "react";
import ReactGA from "react-ga4";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-HPCNR3LSRV");
  }, []);

  return <Home />;
};

export default App;
