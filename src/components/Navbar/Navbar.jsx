import React from "react";
import { IoMdSearch } from "react-icons/io"; // Search icon
import { FaShoppingCart } from "react-icons/fa"; // Shopping cart icon
import { FaCaretDown } from "react-icons/fa"; // Dropdown icon
import { FiShoppingBag } from "react-icons/fi"; // Shopping bag icon
import Darkmode from "./Darkmode";



const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: <IoMdSearch className="text-gray-500" />,
  },
  {
    id: 2,
    name: "About",
    link: "/about",
    icon: <FaShoppingCart className="text-gray-500" />,
  },

  {
    id: 3,
    name: "Product",
    link: "/link",
    icon: <FaCaretDown className="text-gray-500" />,
  },


]



const Dropdownlink = [
  {
    id: 1,
    name: "Trending Item 1",
    link: "/trending1",
  },
  {
    id: 2,
    name: "Trending Item 2",
    link: "/trending2",
  },
  {
    id: 3,
    name: "Trending Item 3",
    link: "/trending3",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center gap-1 flex">
              <FiShoppingBag size="30" />
              ShopMe
            </a>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => {
                handleOrderPopup();
              }}
              className="bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <div>  <Darkmode /> </div>

          </div>
        </div>
      </div>

      <div data-aos='zoom-in' className="flex justify-center" >
        <ul className="sm:flex hidden items-center gap-4 ">
          {Menu.map( (data)=>(
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 hover:text-primary duration-200 ">
                {data.name}
              </a>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Tranding Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 " />
              </span>
            </a>

            <div className="absolute z-[9999 hidden group-hover:block w-[200px] rounded-md tex-black shadow-md ]">
              <ul>
                {Dropdownlink.map((data)=>{
                  <li key={data.id}>
                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                    {data.name}

                    </a>
                  
                  </li>
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
