import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000
    })
  },[]);
  return (
    <div className="carousel w-full  md:min-h-[670px] h-[400px]">
      <div
        id="banner1"
        className="carousel-item relative w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/vwLzSHr/mihaly-koles-N050-NP-u6j-I-unsplash.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>


        <div className="   w-full   text-[#e1e4fa] ">
          <h1 
            data-aos="fade-right"
            style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)", 
          }} className="md:text-6xl w-full text-4xl mt-4 md:mt-8 ml-3 text-[#0F1035]  font-extrabold">Mountain Treks</h1>
          {/* <p className="md:w-[60%] text-[#FFFFFFCC]">Embark on unforgettable adventures with Mountain Treks. Discover breathtaking destinations, create lasting memories, and explore the beauty of nature like never before.</p> */}
        </div>
        
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner4" className="btn btn-circle">
            ❮
          </a>
          <a href="#banner2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="banner2"
        className="carousel-item w-full flex  justify-center  gap-6     relative text-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/3Y0zbcb/Lyh4ui.jpg)",
        }}
      >
        <div className="">
          <h1
            data-aos="fade-right"
           style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)", 
          }}  className="md:text-[80px] text-4xl md:pt-40 pt-16 text-[#2E1C18] font-extrabold">Mountain Treks</h1>
          
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner1" className="btn btn-circle">
            ❮
          </a>
          <a href="#banner3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* https://i.ibb.co.com/CQxrCrS/mountain-peak-tourists-trekking-nature.jpg */}
      <div
        id="banner3"
        className="carousel-item w-full flex   border  gap-6    text-[#e1e4fa]  relative  bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/CQxrCrS/mountain-peak-tourists-trekking-nature.jpg )",
        }}
      >
        <div className=" text-[#2791a7a4] ">
          <h1 style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)", 
          }} 
          className="md:text-[80px] text-4xl ml-3 md:ml-4 font-extrabold">Mountain Treks</h1>
          
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner2" className="btn btn-circle">
            ❮
          </a>
          <a href="#banner4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* https://i.ibb.co.com/Rz8rCjr/thumb-1920-238870.jpg */}
      <div
        id="banner4"
        className="carousel-item w-full flex  justify-center  gap-6     relative text-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/Rz8rCjr/thumb-1920-238870.jpg )",
        }}
      >
        <div className="">
          <h1 style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)", 
          }} 
          className="md:text-[80px] text-4xl md:mt-24 mt-8 text-white font-extrabold">Mountain Treks</h1>
          
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner3" className="btn btn-circle">
            ❮
          </a>
          <a href="#banner1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
