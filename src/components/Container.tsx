import { ReactNode } from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopBar />
      <div className="bg-gray-900 text-white w-full h-[100vh] px-4">
        <div className="max-w-4xl pt-4 lg:pt-14 mx-auto z-[2]">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Container;
