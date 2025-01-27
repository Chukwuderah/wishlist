import React from "react";
import FirstList from "./first-list";
import SecondList from "./secondList";
import ThirdList from "./thirdList";

const Footer = () => {
  return (
    <footer className="flex-container">
      <FirstList />
      <SecondList />
      <ThirdList />
    </footer>
  );
};

export default Footer;