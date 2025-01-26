import React from "react";
import laptop from "../src/assets/Frame 604.png";
import monitor from "../src/assets/LCD Monitor.png";
import gamepad from "../src/assets/Gamepad.png";
import Keyboard from "../src/assets/Keyboard.png";
const SuggestionItem = ({
  image = laptop,
  name = "ASUS FHD Gaming Laptop",
  price = 960,
  originalPrice,
  showDiscount = false,
}) => {
  return (
    <div className="items">
      <div className="disc">
        {showDiscount && <span>-35%</span>}
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="17" cy="17" r="17" fill="white" />
          <path
            d="M26.2565 15.962C26.7305 16.582 26.7305 17.419 26.2565 18.038C24.7635 19.987 21.1815 24 16.9995 24C12.8175 24 9.23552 19.987 7.74252 18.038C7.51191 17.7411 7.38672 17.3759 7.38672 17C7.38672 16.6241 7.51191 16.2589 7.74252 15.962C9.23552 14.013 12.8175 10 16.9995 10C21.1815 10 24.7635 14.013 26.2565 15.962V15.962Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="content">
        <img src={image} alt={name} />
      </div>
      <div className="cart">
        <p>Add To Cart</p>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.75 3.75H5.75L8 16.5H20"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <strong>{name}</strong>
      <p className="price">
        ${price}
        {originalPrice && <span>${originalPrice}</span>}
      </p>
    </div>
  );
};

const Suggestion = () => {
  return (
    <section className="wishlist">
      <div className="txt">
        <p>
          <span className="blob"></span> Just For You
        </p>
        <button type="button">See All</button>
      </div>
      <div className="flex-container">
        <SuggestionItem showDiscount={true} originalPrice={1160} />
        <SuggestionItem
          image={monitor}
          name="IPS LCD Gaming Monitor"
          price={1160}
        />
        <SuggestionItem
          image={gamepad}
          name="HAVIT HV-G92 Gamepad"
          price={560}
        />
        <SuggestionItem
          image={Keyboard}
          name="AK-900 Wired Keyboard"
          price={200}
        />
      </div>
    </section>
  );
};

export default Suggestion;
