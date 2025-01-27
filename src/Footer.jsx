import React from "react";
import FirstList from "./first-list";
import SecondList from "./secondList";
import ThirdList from "./thirdList";
import FourthList from "./fourthList";

const Footer = () => {
  return (
    <footer className="flex-container">
      <FirstList />
      <SecondList />
      <ThirdList />
      <FourthList />
    </footer>
  );
};

export default Footer;