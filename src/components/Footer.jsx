import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src="/logo.png" className="mb-5 w-32"></img>
          <p className="w-full md:w-2/3 text-gray-600">
            Forever is a great online store that is meant to deliver food to
            various store outlets in the world
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+ 254-703-556-700</li>
            <li>contact@merchhub.com </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="py-5 text-sm text-center">
        {" "}
        Copyright 2024@merchhub.com-All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
