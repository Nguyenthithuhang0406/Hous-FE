import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import IconFixedRight from "./IconFixedRight";
import IconFixedLeft from "./IconFixedLeft";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <IconFixedRight />
      <IconFixedLeft />
      <main >{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
