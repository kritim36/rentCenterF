import React from "react";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";

const Homecards = ({ title, description }) => {
  return (
    <div className="ml-10">
      <div className="relative flex w-56 h-30 justify-center items-center flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow hover:border-gray-200 dark:hover:border-gray-200 hover:outline-none hover:ring hover:ring-opacity-20 hover:ring-gray-200">
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl items-center justify-center ml-7  leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans p font-light text-base items-center justify-center leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
    </div>
    </div>
  );
};

const CardList = () => {
  
  const cardData = [
    {
      title: <RiMotorbikeFill />,
      description:
        " Two wheelers ",
    },
    {
      title: <FaCar />,
      description:
        "Four wheelers",
    },{
      title: <FaMobileAlt />,
      description:
        "Smartphones",
    },
    {
      title: <MdComputer />
      ,
      description:
        "Computers",
    },
    {
      title: <MdComputer />
      ,
      description:
        "Electronics",
    }
    // Add more card data as needed
  ];

  return (
    <div className="flex space-x-4 ">
      {cardData.map((card, index) => (
        <Homecards key={index} {...card} />
      ))}
    </div>
  );
};

document.body.style.overflowX = 'hidden';
export default CardList;



















      

