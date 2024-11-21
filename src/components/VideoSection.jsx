import AOS from "aos";
import { useEffect } from "react";

const VideoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="relative h-screen ">
      
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: -1, 
        }}
      >
        <source
          src="/videoSection.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div
        data-aos="fade-up"
        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white"
      >
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          EXPLORE FULL ITINERARIES & TRIP IDEAS FOR HIKING
        </h2>
        <p className="md:w-1/2 mx-auto text-sm mb-6">
          Embark on a journey like no other. Discover trails, scenic views, and
          unforgettable adventures with Mountain Treks. Plan your next escape
          today!
        </p>
        <a
          href="#"
          data-aos="fade-up"
          className="bg-[#0F1035] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#3e4081] transition-all duration-300"
        >
          START JOURNEY
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
