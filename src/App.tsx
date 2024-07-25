import { useEffect } from "react";
import ReactGA from "react-ga4";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    if (import.meta.env.MODE === "production") {
      // Initialize Google Analytics
      ReactGA.initialize("G-HPCNR3LSRV");
    }
  }, []);

  return <Home />;
};

export default App;
