import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src="/about_img.png"
          alt="About MerchHub"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to MerchHub—where style meets convenience! We are your go-to
            online store for trendy, high-quality apparel that keeps you looking
            fresh and feeling confident. Whether you're after streetwear, casual
            essentials, or statement pieces, we've got something for every vibe
            and occasion.
            <br />
            <br />
            We believe fashion is more than just clothing—it's a form of
            self-expression. Shop with us and redefine your wardrobe, one outfit
            at a time. Fast shipping, secure payments, and top-notch customer
            service—because you deserve the best. Stay stylish. Stay unique.
            Stay with MerchHub!
          </p>
          <p>
            MerchHub began as a small online store with a vision to offer
            stylish, high-quality apparel for effortless self-expression.
            Growing into a fashion hub, we introduced exclusive designs, faster
            shipping, and an ever-evolving collection. More than a store,
            MerchHub is a movement—committed to{" "}
            <strong>Style, Quality, and Convenience.</strong>
          </p>
          <b className="text-gray-800 font-bold text-xl underline">
            Our Mission
          </b>
          <p>
            Our mission is to empower self-expression through stylish,
            high-quality, and affordable apparel. We strive to provide a
            seamless shopping experience with trendy collections, reliable
            service, and fast shipping, ensuring that fashion is accessible to
            everyone.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className=" border-r-emerald-700  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Quality Assurance:</b>
          <p className="text-gray-600">
            Quality is our priority. We carefully select premium fabrics and
            ensure every piece meets high standards of durability, comfort, and
            style. Our commitment to excellence means you get apparel that looks
            great, feels amazing, and lasts. Shop with confidence—because you
            deserve the best.
          </p>
        </div>
        <div className=" border-r-emerald-700  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Convenience:</b>
          <p className="text-gray-600">
            We make shopping easy with a smooth online experience, fast
            shipping, and secure payments. Whether you're updating your wardrobe
            or grabbing a last-minute outfit, we've got you covered—hassle-free
            and right at your fingertips.
          </p>
        </div>
        <div className=" border-r-emerald-700  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated support team is always ready to assist with any
            questions, orders, or concerns. We’re here to ensure a smooth
            shopping experience—because great service is just as important as
            great style.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
