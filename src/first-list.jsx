import React from "react";

const FirstList = () => {
  return (
    <div className="firstList">
      <h1>Exclusive</h1>
      <h3>Suscribe</h3>
      <p>Get 10% off your first order</p>
      <div className="input">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.91196 12H3.99996L2.02296 4.13505C2.0103 4.08934 2.00259 4.0424 1.99996 3.99505C1.97796 3.27405 2.77196 2.77405 3.45996 3.10405L22 12L3.45996 20.896C2.77996 21.223 1.99596 20.737 1.99996 20.029C2.00198 19.9658 2.0131 19.9031 2.03296 19.843L3.49996 15"
            stroke="#FAFAFA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default FirstList;
