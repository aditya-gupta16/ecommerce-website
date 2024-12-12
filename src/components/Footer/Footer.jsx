import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocation, FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Product",
    link: "/product",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#212529", color: "white" }}>
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-3 pt-5 ">
          <div className="py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              Shopme
            </h1>
            <p>
              "Your Style, Our Passion - Shop with Confidence!" "Discover
              quality products, exceptional value, and unbeatable style. Stay
              connected with us for more!"
            </p>
          </div>
        </div>
        <div className="py- px-4 ">
          <h1 className="sm-text-xl text-xl font-bold sm:text-left text-justify mb-3 ">
            Important Links
          </h1>

          <ul className="flex flex-col gap-3">
            {FooterLinks.map((link) => (
              <li
                className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-300"
                key={link.title}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="py-2 mt-2 px-8 text-green">
          <h1 className="sm-text-xl text-2xl font-bold sm:text-left text-justify ">
            Links!
          </h1>

          <ul className="flex flex-col gap-3">
            {FooterLinks.map((link) => (
              <li
                className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-300"
                key={link.title}
              ></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex item-center gap-3 px-8 text-2xl ">
        <a href="https://Instagram.com">
          <FaInstagram className="text-3x" />
        </a>
        <a href="https://Linkedin.com">
          <FaLinkedin className="text-3x" />
        </a>
        <a href="https://Twitter.com">
          <FaTwitter className="text-3x" />
        </a>
        <a href="https://Facebook.com">
          <FaFacebook className="text-3x" />
        </a>
      </div>
      <div className="mt-5 px-8">
        <div className="flex items-center gap-3">
          <FaMapLocationDot />
          <p>Bhopal, Madhya Pradesh</p>
        </div>

        <div className="flex items-center gap-3 mt-3 pb-4">
          <IoCall />
          <p>+91 7805075555</p>
        </div>
      </div>

      <div className="w-full h-6 bg-white text-center text-black dark:text-black bg-white">
        <p className="text-sm">&copy; 2024 ShopMe. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
