import React from "react";
import FirstList from "./first-list";
import SecondList from "./secondList";

const Footer = () => {
  return (
    <footer className="flex-container">
      <FirstList />
      <SecondList />
    </footer>
  );
};

export default Footer;