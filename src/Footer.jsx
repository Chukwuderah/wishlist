import React from "react";
import FirstList from "./first-list";
import SecondList from "./secondList";
import ThirdList from "./thirdList";
import FourthList from "./fourthList";
import FifthList from "./fifthList";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <FirstList />
        <SecondList />
        <ThirdList />
        <FourthList />
        <FifthList />
      </div>
      <div className="copyright">
        <p>© Copyright {year} Exclusive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
