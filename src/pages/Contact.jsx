import React from "react";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src="/contact_img.png"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            {" "}
            Star-Mall, Moi-Avenue <br />
            Suite 85, Nairobi, Kenya{" "}
          </p>
          <p className="text-gray-500">
            Tel: +254 703-556-700 <br />
            Email: admin@merchhub.com
          </p>
          <p className="font-semibold text-xl text-gray-600"></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
