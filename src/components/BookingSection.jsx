import AOS from "aos";
import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="py-16 ">
      <div className="container bg-white p-7  rounded-2xl mx-auto flex flex-col lg:flex-row justify-between  gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-between" data-aos="fade-right" >
          <h3 className="text-[#0F1035] mt-4 text-xl uppercase tracking-wide font-semibold ">
            Booking Now
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2c2a] mb-4">
            Plan Your Adventure to Nature - Book Now!
          </h2>
          <p className="text-base text-gray-700  mb-4">
            Embark on an unforgettable journey with Mountain Treks. Whether
            you're looking for serene escapes or thrilling expeditions, we've
            got you covered. Choose your dream destination and make it a
            reality!
          </p>
          <img
            src=" https://i.ibb.co.com/2qsD0R8/mount-fuji-night-reflections-do-2048x1152.jpg"
            alt="Mountain Trek Booking"
            className="rounded-lg object-cover h-[400px] w-full  shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div
          className="lg:w-1/2 bg-[#0F1035] text-white rounded-2xl shadow-lg p-8"
          data-aos="fade-left"
        >
          <form className="space-y-6">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="input w-full bg-white text-black placeholder-gray-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="input w-full bg-white text-black placeholder-gray-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="input w-full bg-white text-black placeholder-gray-600"
              />
            </div>
            <div className="flex flex-col gap-4">
              <select
                className="input w-full bg-white text-black placeholder-gray-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Trek Package
                </option>
                <option value="easy">Easy Trek</option>
                <option value="moderate">Moderate Trek</option>
                <option value="difficult">Difficult Trek</option>
              </select>
              <input
                type="number"
                placeholder="Number of Guests"
                className="input w-full bg-white text-black placeholder-gray-600"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="date"
                className="input w-full bg-white text-black placeholder-gray-600"
              />
              <input
                type="date"
                className="input w-full bg-white text-black placeholder-gray-600"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Add-Ons or Special Requests"
              className="textarea w-full bg-white text-black placeholder-gray-600"
            />
            <button
              type="submit"
              className="btn w-full bg-[#0F1035] text-white hover:bg-white hover:text-[#0F1035] transition duration-300"
            >
              Book Your Adventure!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
