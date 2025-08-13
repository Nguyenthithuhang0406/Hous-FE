import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import IconFixedRight from "./IconFixedRight";
import IconFixedLeft from "./IconFixedLeft";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <IconFixedRight />
      <IconFixedLeft />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
