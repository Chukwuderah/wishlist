import React from "react";
import duffle from "../src/assets/duffle.png";
import frame from "../src/assets/Frame 608.png";

const WishlistItem = ({
  image = duffle,
  name = "Gucci duffel bag",
  price = 960,
  originalPrice = 1160,
}) => {
  return (
    <div className="items">
      <div className="disc">
        <span>-35%</span>
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="17" cy="17" r="17" fill="white" />
          <path
            d="M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714"
            stroke="black"
            strokeWidth="1.56"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="content">
        <img src={image} alt={name} />
        <p>Add To Cart</p>
      </div>
      <strong>{name}</strong>
      <p>
        ${price} <span>${originalPrice}</span>
      </p>
    </div>
  );
};

const WishList = () => {
  return (
    <section className="wishlist">
      <div className="txt">
        <p>WishList (4)</p>
        <button type="button">Move All To Blog</button>
      </div>
      <div className="flex-container">
        <WishlistItem />
        <WishlistItem
          image={frame}
          name="Another Bag"
          price={750}
          originalPrice={1000}
        />
        <WishlistItem />
        <WishlistItem />
      </div>
    </section>
  );
};

export default WishList;
