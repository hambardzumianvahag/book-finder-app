import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
