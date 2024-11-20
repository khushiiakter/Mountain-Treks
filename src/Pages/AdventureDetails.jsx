// import 'animate.css';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "animate.css";

const AdventureDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [adventure, setAdventure] = useState({});

  useEffect(() => {
    const singleData = data.find((item) => item.id == id);
    setAdventure(singleData || {});
  }, [data, id]);
  //
  const handleExpertConsultation = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 10 && currentHour <= 20) {
      window.open("https://meet.google.com", "_blank");
    } else {
      alert("Consultation is available from 10:00 AM to 8:00 PM.");
    }
  };
  const {
    adventureTitle,
    image,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems = [],
    ecoFriendlyFeatures = [],
    maxGroupSize,
    specialInstructions = [],
  } = adventure;
  // return <h1>{includedItems}</h1>

  return (
    <div className="bg-[#f2f4ff] py-10 px-5">
      <div
        className="max-w-5xl h-fit mx-auto flex md:flex-row flex-col bg-white rounded-lg shadow-md overflow-hidden animate__animated animate__fadeIn"
        style={{ animationDuration: "1s" }}
      >
        <div className="md:w-1/2">
          <img
            src={image}
            alt={adventureTitle}
            className=" object-cover w-full h-full animate__animated animate__zoomIn"
            style={{ animationDuration: "1.5s" }}
          />
        </div>
        <div className="p-6 md:w-1/2 flex flex-col items-start justify-between text-left">
          <h1 className="md:text-2xl text-xl font-bold mb-3 animate__animated animate__fadeInLeft">
            {adventureTitle}
          </h1>
          <p className="text-gray-600 text-sm mb-2 animate__animated animate__fadeInRight">
            {shortDescription}
          </p>
          <p className="text-base font-semibold mb-2">
              Max Group Size: {maxGroupSize}
            </p>
          <div className="flex flex-wrap gap-2 mb-3 animate__animated animate__fadeInUp">
            <span className="badge badge-outline text-xs bg-[#0F1035]  text-white border-[#0F1035]">{categoryName}</span>
            <span className="badge badge-outline text-xs bg-[#0F1035]  text-white border-[#0F1035]">Level: {adventureLevel}</span>
            <span className="badge badge-outline text-xs bg-[#0F1035]  text-white border-[#0F1035]">Cost: ${adventureCost}</span>
            <span className="badge badge-outline text-xs bg-[#0F1035]  text-white border-[#0F1035]">Duration: {duration}</span>
          </div>
          <h2 className="text-lg font-semibold mb-2 animate__animated animate__slideInLeft">
            Features:
          </h2>
          <ul className="list-disc  text-sm list-inside mb-3">
            {ecoFriendlyFeatures.map((feature, index) => (
              <li
                key={index}
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {feature}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mb-2 animate__animated animate__slideInRight">
            Included Items:
          </h2>
          <ul className="list-disc  text-sm list-inside mb-3">
            {includedItems.map((item, index) => (
              <li
                key={index}
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {item}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mb-2 animate__animated animate__slideInLeft">
            Special Instructions:
          </h2>
          <ul className="list-disc text-sm list-inside mb-3">
            {specialInstructions.map((instruction, index) => (
              <li
                key={index}
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {instruction}
              </li>
            ))}
          </ul>
          
          <div className="flex gap-4 items-center animate__animated animate__fadeIn">
            
            <button onClick={handleExpertConsultation} className="btn text-white bg-[#0F1035] hover:text-[#0F1035] hover:bg-[#0f10356c]  rounded-xl animate__animated animate__pulse animate__infinite">
              Talk with Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetails;
